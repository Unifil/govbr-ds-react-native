import React from 'react'

import {
  PanResponder,
  Animated,
  View,
  StyleSheet,
  PanResponderGestureState,
  Dimensions
} from 'react-native'

import { ListItemSwipeableProps, RneFunctionComponent } from './CardSwipeable.props'
import { BaseCard } from '../src/components/BaseCard/BaseCard'

const Screen = Dimensions.get('window')
const ScreenWidth = Screen.width

export const CardSwipeable: RneFunctionComponent<
ListItemSwipeableProps
> = ({
  children,
  leftStyle,
  rightStyle,
  leftContent,
  rightContent,
  leftWidth = ScreenWidth / 3,
  rightWidth = ScreenWidth / 3,
  minSlideWidth = ScreenWidth / 3,
  onSwipeBegin,
  onSwipeEnd,
  animation = { type: 'spring', duration: 200 },
  ...rest
}: any) => {
  const translateX = React.useRef(new Animated.Value(0))
  const panX = React.useRef(0)

  const slideAnimation = React.useCallback(
    (toValue: number) => {
      panX.current = toValue;
      (Animated as any)[animation.type || 'spring'](translateX.current, {
        toValue,
        useNativeDriver: true,
        duration: animation.duration || 200
      }).start()
    },
    [animation.duration, animation.type]
  )

  const resetCallBack = React.useCallback(() => {
    slideAnimation(0)
  }, [slideAnimation])

  const onMove = React.useCallback(
    (_: unknown, { dx }: PanResponderGestureState) => {
      translateX.current.setValue(panX.current + dx)
    },
    []
  )

  const onRelease = React.useCallback(
    (_: unknown, { dx }: PanResponderGestureState) => {
      if (Math.abs(panX.current + dx) >= minSlideWidth) {
        slideAnimation(panX.current + dx > 0 ? leftWidth : -rightWidth)
      } else {
        slideAnimation(0)
      }
    },
    [leftWidth, rightWidth, slideAnimation, minSlideWidth]
  )

  const shouldSlide = React.useCallback(
    (_: unknown, { dx, dy, vx, vy }: PanResponderGestureState): boolean => {
      if (dx > 0 && !leftContent && !panX.current) {
        return false
      }
      if (dx < 0 && !rightContent && !panX.current) {
        return false
      }
      return (
        Math.abs(dx) > Math.abs(dy) * 2 && Math.abs(vx) > Math.abs(vy) * 2.5
      )
    },
    [leftContent, rightContent]
  )

  const _panResponder = React.useMemo(
    () =>
      PanResponder.create({
        onMoveShouldSetPanResponder: shouldSlide,
        onPanResponderGrant: (_event, { vx }) => {
          onSwipeBegin?.(vx > 0 ? 'left' : 'right')
        },
        onPanResponderMove: onMove,
        onPanResponderRelease: onRelease,
        onPanResponderReject: onRelease,
        onPanResponderTerminate: onRelease,
        onPanResponderEnd: () => {
          onSwipeEnd?.()
        }
      }),
    [onMove, onRelease, onSwipeBegin, onSwipeEnd, shouldSlide]
  )

  return (
    <View style={styles.container}>
      <View style={styles.actions}>
        <View
          style={[
            {
              width: leftWidth,
              zIndex: 1
            },
            leftStyle
          ]}
        >
          {typeof leftContent === 'function'
            ? leftContent(resetCallBack)
            : leftContent}
        </View>
        <View style={styles.empty} />
        <View
          style={[
            {
              width: rightWidth,
              zIndex: 1
            },
            rightStyle
          ]}
        >
          {typeof rightContent === 'function'
            ? rightContent(resetCallBack)
            : rightContent}
        </View>
      </View>
      <Animated.View
        style={{
          transform: [
            {
              translateX: translateX.current
            }
          ]
        }}
        {..._panResponder.panHandlers}
      >
        <BaseCard {...rest}>{children}</BaseCard>
      </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  actions: {
    bottom: 0,
    left: 0,
    overflow: 'hidden',
    position: 'absolute',
    right: 0,
    top: 0,

    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  container: {
    justifyContent: 'center',
    marginBottom: 10
  },
  empty: {
    flex: 0
  }
})

CardSwipeable.displayName = 'ListItem.Swipeable'
