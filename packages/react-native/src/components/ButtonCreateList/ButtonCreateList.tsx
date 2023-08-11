import React, { ReactElement } from 'react'

import { Text, TouchableOpacity, View } from 'react-native'

import { ButtonProps } from './ButtonCreateList.props'
import { styles } from './ButtonCreateList.styles'

export const ButtonCreateList = (props: ButtonProps): ReactElement => {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  function renderButton() {
    switch (props.type) {
      case 'primary':
        return (
          <>
            {props?.disabled ? (
              <ButtonDisabled {...props} />
            ) : (
              <ButtonPrimary {...props} />
            )}
          </>
        )
      case 'custom':
        return (
          <>
            {props?.disabled ? (
              <ButtonDisabled {...props} />
            ) : (
              <ButtonCustom {...props} />
            )}
          </>
        )
    }
  }

  return <>{renderButton()}</>
}

const ButtonPrimary = (props: ButtonProps): ReactElement => {
  return (
    <TouchableOpacity onPress={props.onPress} style={[styles.primary]}>
      {props.icon &&
        <View style={[styles.iconPrimary]}>
          {props.icon}
        </View>
      }
      <Text style={[styles.textPrimary]}>{props.text}</Text>
    </TouchableOpacity>
  )
}

const ButtonDisabled = (props: ButtonProps): ReactElement => {
  return (
    <View style={[styles.disabled]}>
      {props.icon &&
        <View style={[styles.iconDisabled]}>
          {props.icon}
        </View>
      }
      <Text style={[styles.textDisabled]}>{props.text}</Text>
    </View>
  )
}

const ButtonCustom = (props: ButtonProps): ReactElement => {
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
      {props.icon &&
        <View
          style={[
            styles.iconPrimary,
            {
              backgroundColor: props.iconBackground
            }
          ]}
        >
          {props.icon}
        </View>
      }
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
