import React, { ReactElement } from 'react'

import { colors } from '@unifil/tokens'
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native'

import { ButtonProps } from './Button.props'
import { styles } from './Button.styles'

export const Button = (props: ButtonProps): ReactElement => {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  function renderButton() {
    switch (props.type) {
      case 'primary':
        return <ButtonPrimary {...props} />
      case 'secondary':
        return <ButtonSecondary {...props} />
      case 'custom':
        return <ButtonCustom {...props} />
    }
  }

  return <>{renderButton()}</>
}

const ButtonPrimary = (props: ButtonProps): ReactElement => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      testID={props.testID}
      disabled={props.disabled}
      style={[
        styles.primary,
        {
          marginTop: props?.marginTop ?? 0,
          marginBottom: props?.marginBottom ?? 0,
          backgroundColor: props?.backgroundColor ? props?.backgroundColor : colors.blueSecondary,
          opacity: props.disabled ? 0.3 : 1
        }
      ]}
    >
      {props.iconLeft && (
        <View style={{ marginRight: 8 }}>{props.iconLeft}</View>
      )}
      {!props.isLoading ? (
        <>
          <Text style={[styles.textPrimary]}>{props.text}</Text>
          {props.icon && (
            <View style={{ marginLeft: 8 }}>{props.icon}</View>
          )}
        </>
      ) : (
        <ActivityIndicator size="small" color={colors.blueSecondary} />
      )}
    </TouchableOpacity>
  )
}

const ButtonSecondary = (props: ButtonProps): ReactElement => {
  return (
    <TouchableOpacity
      testID={props.testID}
      onPress={props.onPress}
      disabled={props.disabled}
      style={[
        styles.secondary,
        {
          width: props?.width,
          marginTop: props?.marginTop ?? 0,
          marginBottom: props?.marginBottom ?? 0,
          opacity: props.disabled ? 0.3 : 1
        }
      ]}
    >
      {!props.isLoading ? (
        <>
          <Text style={[styles.textSecondary]}>{props.text}</Text>
          {props.icon && (
            <View style={{ marginLeft: 8 }}>{props.icon}</View>
          )}
        </>
      ) : (
        <ActivityIndicator size="small" color={colors.blueSecondary} />
      )}
    </TouchableOpacity>
  )
}

const ButtonCustom = (props: ButtonProps): ReactElement => {
  return (
    <TouchableOpacity
      testID={props.testID}
      onPress={props.onPress}
      disabled={props.disabled}
      style={[
        styles.primary,
        {
          backgroundColor: props.backgroundColor,
          width: props.width,
          height: props.height,
          borderRadius: props.borderRadius,
          marginTop: props.marginTop,
          marginBottom: props.marginBottom,
          opacity: props.disabled ? 0.3 : 1
        }
      ]}
    >
      {!props.isLoading ? (
        <Text
          style={[
            styles.textCustom,
            {
              color: props.colorText,
              fontWeight: props.fontWeight,
              fontSize: props.fontSize,
              fontFamily: props.fontFamily,
              textAlign: props.textAlign,
              textDecorationLine: props.textDecoration
            }
          ]}
        >
          {props.text}
        </Text>
      ) : (
        <ActivityIndicator size="small" color={colors.blueSecondary} />
      )}
      {props.icon && <View style={{ marginLeft: 8 }}>{props.icon}</View>}
    </TouchableOpacity>
  )
}
