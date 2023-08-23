import React, { ReactElement, useState } from 'react'

import { View, Dimensions, Pressable, TouchableOpacity } from 'react-native'
import { PanGestureHandler } from 'react-native-gesture-handler'
import Animated, {
  useAnimatedGestureHandler,
  useSharedValue,
  useAnimatedStyle,
  withSpring
} from 'react-native-reanimated'

import { ModalizerProps } from './Modalize.props'
import { styles } from './Modalize.styles'

const { height } = Dimensions.get('window')

export const Modalize = ({ isVisible, children }: ModalizerProps): ReactElement => {
  const translateY = useSharedValue(0)
  const [isMove, setIsMove] = useState(false)
  const opacity = useSharedValue(0.3)

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx: any) => {
      ctx.startY = translateY.value
    },
    onActive: (event, ctx) => {
      if (isMove) {
        translateY.value = ctx.startY + event.translationY

        const maxDragDistance = 200
        const newOpacity = 1 - (event.translationY / maxDragDistance * 0.8)
        opacity.value = Math.max(0, Math.min(newOpacity, 0.3))
      } else {
        opacity.value = 0.3
      }
    },
    onEnd: (event) => {
      if (event.translationY > 120) {
        if (isMove) {
          translateY.value = withSpring(height)
        }
      } else {
        if (isMove) {
          translateY.value = withSpring(0)
        }
      }
    }
  })

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }]
    }
  })

  const animatedContainerStyles = useAnimatedStyle(() => {
    return {
      backgroundColor: !isMove ? 'rgba(0,0,0,0.3)' : `rgba(0,0,0,${opacity.value})`
    }
  })

  return (
    <>
      {!isVisible ? (
        <></>
      ) : (
        <Animated.View style={[styles.container, animatedContainerStyles]}>
        <PanGestureHandler onGestureEvent={gestureHandler}>
          <Animated.View style={[styles.containerContent, animatedStyles]}>
            <Pressable
              onPress={() => {
                setIsMove(false)
              }}
            >
              <TouchableOpacity
                onPressIn={() => {
                  setIsMove(true)
                }}
                style={styles.buttonExpand}
              />
              <View style={styles.content}>
              {children}
              </View>
            </Pressable>
          </Animated.View>
        </PanGestureHandler>
      </Animated.View>
      )}
    </>
  )
}
