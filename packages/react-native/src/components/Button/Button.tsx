import React, { ReactElement } from 'react'

import { Text, TouchableOpacity } from 'react-native'

import { ButtonProps } from './Button.props'
import { styles } from './Button.styles'

export const Button = (props: ButtonProps): ReactElement => {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  function renderButton() {
    switch (props.type) {
      case 'primary':
        return (
          <TouchableOpacity
              onPress={props.onPress}
              style={[styles.primary]}
            >
            <Text style={[styles.textPrimary]} >
              {props.text}
            </Text>
          </TouchableOpacity>
        )
      case 'secondary':
        return (
          <TouchableOpacity style={[styles.secondary]} onPress={props.onPress}>
            <Text style={[styles.textSecondary]} >
              {props.text}
            </Text>
          </TouchableOpacity>
        )
      case 'random':
        return (
          <TouchableOpacity
            onPress={props.onPress}
            style={[
              styles.primary,
              {
                backgroundColor: props.backgroundColor,
                width: props.width,
                height: props.height,
                borderRadius: props.borderRadius,
                marginTop: props.marginTop,
                marginBottom: props.marginBottom
              }
            ]}
          >
            <Text
              style={[
                styles.textPrimary,
                {
                  color: props.colorText,
                  fontWeight: props.fontWeight,
                  fontSize: props.fontSize
                }
              ]}
            >
              {props.text}
            </Text>
          </TouchableOpacity>
        )
    }
  }

  return (
    <>{renderButton()}</>
  )
}
