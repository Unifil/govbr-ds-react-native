/* eslint-disable @typescript-eslint/indent */
import React from 'react'

import { PressableProps, StyleProp, ViewStyle } from 'react-native'

export interface CardAccordionProps extends ListItemProps {

  isExpanded?: boolean

  icon?: any

  expandIcon?: any

  content?: React.ReactNode

  noRotation?: boolean

  leftRotate?: boolean

  noIcon?: boolean

  textCheckbox?: any

  multipleSelection?: boolean

  top?: number

  left?: number

  right?: number

  bottom?: number

  animation?:
  | {
    type?: 'timing' | 'spring'
    duration?: number
  }
  | boolean
}

interface ListItemProps extends PressableProps {
  containerStyle?: StyleProp<ViewStyle>

  disabledStyle?: StyleProp<ViewStyle>

  topDivider?: boolean

  bottomDivider?: boolean

  pad?: number

  Component?: typeof React.Component

  ViewComponent?: typeof React.Component

  linearGradientProps?: any

  children?: any

  backgroundColor?: any
}

export type RneFunctionComponent<T> = React.FunctionComponent<
  T & {
    theme?: any
    children?: React.ReactNode | undefined
    backgroundColor?: any
  }
>
