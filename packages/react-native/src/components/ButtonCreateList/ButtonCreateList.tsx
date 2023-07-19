import React, { ReactElement } from 'react'

import { Text, TouchableOpacity } from 'react-native'

import { ButtonProps } from './ButtonCreateList.props'
import { styles } from './ButtonCreateList.styles'

export const ButtonCreateList = (props: ButtonProps): ReactElement => {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  function renderButton() {
    switch (props.type) {
      case 'primary':
        return (
          <TouchableOpacity onPress={props.onPress} style={[styles.primary]}>
            <Text style={[styles.textPrimary]}>{props.text}</Text>
          </TouchableOpacity>
        )
      case 'secondary':
        return (
          <TouchableOpacity style={[styles.secondary]}>
            <Text style={[styles.textSecondary]}>{props.text}</Text>
          </TouchableOpacity>
        )
      case 'custom':
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

  return <>{renderButton()}</>
}
