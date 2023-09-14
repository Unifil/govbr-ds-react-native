import React, { ReactElement } from 'react'

import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native'

import { ButtonProps } from './Button.props'
import { styles } from './Button.styles'

export const Button = (props: ButtonProps): ReactElement => {
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
      case 'secondary':
        return <ButtonSecondary {...props} />
      case 'disabled':
        return <ButtonDisabled {...props} />
      case 'custom':
        return <ButtonCustom {...props} />
    }
  }

  return <>{renderButton()}</>
}

const ButtonPrimary = (props: ButtonProps): ReactElement => {
  return (
    <TouchableOpacity onPress={props.onPress} style={[styles.primary]}>
      {!props.isLoading ? (
        <>
          <Text style={[styles.textPrimary]}>{props.text}</Text>
          {props.icon && (
            <View style={{ marginLeft: 8 }}>{props.icon}</View>
          )}
        </>
      ) : (
        <ActivityIndicator size="small" color={props.colorText} />
      )}
    </TouchableOpacity>
  )
}

const ButtonSecondary = (props: ButtonProps): ReactElement => {
  return (
    <TouchableOpacity style={[styles.secondary]} onPress={props.onPress}>
      {!props.isLoading ? (
        <>
          <Text style={[styles.textSecondary]}>{props.text}</Text>
          {props.icon && (
            <View style={{ marginLeft: 8 }}>{props.icon}</View>
          )}
        </>
      ) : (
        <ActivityIndicator size="small" color={props.colorText} />
      )}
    </TouchableOpacity>
  )
}

const ButtonDisabled = (props: ButtonProps): ReactElement => {
  return (
    <View style={[styles.disabled]}>
      {!props.isLoading ? (
        <>
          <Text style={[styles.textPrimary]}>{props.text}</Text>
          {props.icon && <View style={{ marginLeft: 8 }}>{props.icon}</View>}
        </>
      ) : (
        <ActivityIndicator size="small" color={props.colorText} />
      )}
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
      {!props.isLoading ? (
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
      ) : (
        <ActivityIndicator size="small" color={props.colorText} />
      )}
      {props.icon && <View style={{ marginLeft: 8 }}>{props.icon}</View>}
    </TouchableOpacity>
  )
}
