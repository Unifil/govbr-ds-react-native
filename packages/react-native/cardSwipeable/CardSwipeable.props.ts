import React from 'react'

import { StyleProp, PressableProps, ViewStyle } from 'react-native'

export interface ListItemProps extends PressableProps {
  containerStyle?: StyleProp<ViewStyle>

  disabledStyle?: StyleProp<ViewStyle>

  topDivider?: boolean

  bottomDivider?: boolean

  pad?: number

  Component?: typeof React.Component

  ViewComponent?: typeof React.Component

  linearGradientProps?: any

  children?: any
}

export interface ListItemSwipeableProps extends ListItemProps {

  leftContent?: React.ReactNode | ((reset: () => void) => React.ReactNode)

  rightContent?: React.ReactNode | ((reset: () => void) => React.ReactNode)

  leftStyle?: StyleProp<ViewStyle>

  rightStyle?: StyleProp<ViewStyle>

  leftWidth?: number

  rightWidth?: number

  minSlideWidth?: number

  onSwipeBegin?: (direction: 'left' | 'right') => unknown

  onSwipeEnd?: () => unknown

  animation?: {
    type?: 'timing' | 'spring'
    duration?: number
  }
}

export type RneFunctionComponent<T> = React.FunctionComponent<
T & {
  theme?: any
  children?: React.ReactNode | undefined
}
>
