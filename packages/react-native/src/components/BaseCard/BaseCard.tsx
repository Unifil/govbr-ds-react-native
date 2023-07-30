import React from 'react'

import {
  Platform,
  StyleSheet,
  Pressable,
  View
} from 'react-native'

import { PadView } from './components/PadView/PadView'

export const BaseCard: any = (props: any) => {
  const {
    containerStyle,
    onPress,
    onLongPress,
    Component = onPress || onLongPress ? Pressable : View,
    disabled,
    disabledStyle,
    bottomDivider,
    topDivider,
    pad = 16,
    linearGradientProps,
    ViewComponent = View,
    children,
    ...rest
  } = props

  if (props.linearGradientProps && !props.ViewComponent) {
    console.warn(
      "You need to pass a ViewComponent to use linearGradientProps !\nExample: ViewComponent={require('react-native-linear-gradient')}"
    )
  }

  return (
    <Component
      {...rest}
      onPress={onPress}
      onLongPress={onLongPress}
      disabled={disabled}
    >
      <PadView
        Component={ViewComponent}
        {...linearGradientProps}
        style={StyleSheet.flatten([
          {
            ...Platform.select({
              ios: {
              },
              default: {
              }
            }),
            flexDirection: 'row',
            alignItems: 'center'

          },
          topDivider && { borderTopWidth: StyleSheet.hairlineWidth },
          bottomDivider && { borderBottomWidth: StyleSheet.hairlineWidth },
          containerStyle,
          disabled && disabledStyle
        ])}
        pad={pad}
      >
        {children}
      </PadView>
    </Component>
  )
}

BaseCard.displayName = 'ListItem'
