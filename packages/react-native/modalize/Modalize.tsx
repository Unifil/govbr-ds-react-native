import React, { ReactElement, useEffect } from 'react'

import {
  View,
  StyleSheet,
  Dimensions,
  Pressable,
  TouchableOpacity
} from 'react-native'
import { PanGestureHandler } from 'react-native-gesture-handler'
import Animated, {
  useAnimatedGestureHandler,
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  runOnJS
} from 'react-native-reanimated'

const { height } = Dimensions.get('window')

export const Modalize = ({ isVisible, onClose, children }: any): ReactElement => {
  const translateY = useSharedValue(0)
  const [isMove, setIsMove] = React.useState(false)
  const opacity = useSharedValue(0.3)

  useEffect(() => {
    if (isVisible) {
      translateY.value = withSpring(0)
    }
  }, [isVisible])

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx: any) => {
      ctx.startY = translateY.value
    },
    onActive: (event, ctx) => {
      if (isMove) {
        translateY.value = ctx.startY + event.translationY

        const maxDragDistance = 200
        const newOpacity = 1 - (event.translationY / maxDragDistance) * 0.8
        opacity.value = Math.max(0, Math.min(newOpacity, 0.3))
      } else {
        opacity.value = 0.3
      }
    },
    onEnd: (event) => {
      if (event.translationY > 120) {
        if (isMove) {
          translateY.value = withSpring(height)
          runOnJS(onClose)()
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
      backgroundColor: !isMove
        ? 'rgba(0,0,0,0.3)'
        : `rgba(0,0,0,${opacity.value})`
    }
  })

  return (
    <>
      {isVisible ? (
        <Animated.View style={[styles.container, animatedContainerStyles]}>
          <PanGestureHandler onGestureEvent={gestureHandler}>
            <Animated.View style={[styles.content, animatedStyles]}>
              <Pressable
                onPress={() => {
                  setIsMove(false)
                  console.log('sad')
                }}
              >
                <TouchableOpacity
                  onPressIn={() => {
                    setIsMove(true)
                    console.log('onPressIn')
                  }}
                  style={{
                    height: 6,
                    width: 70,
                    backgroundColor: 'lightgrey',
                    borderRadius: 2,
                    alignSelf: 'center',
                    marginTop: 10

                  }}
                ></TouchableOpacity>

                <View
                  style={{
                    height: '100%',
                    width: '100%',
                    alignItems: 'center',
                    marginTop: 20
                  }}
                >
                  {children}
                </View>
              </Pressable>
            </Animated.View>
          </PanGestureHandler>
        </Animated.View>
      ) : null}
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    position: 'absolute',
    justifyContent: 'flex-end',
    zIndex: 999
  },
  content: {
    backgroundColor: 'white',
    height: height * 0.75,
    bottom: -200,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },
  handle: {
    height: 40,
    width: '100%',
    backgroundColor: 'lightgrey'
  }
})
