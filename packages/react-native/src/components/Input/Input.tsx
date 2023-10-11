import React, { ReactElement } from 'react'

import { Text, TextInput, View } from 'react-native'

import { TextProps } from './Input.props'
import { styles } from './Input.styles'

export const Input = (props: TextProps): ReactElement => {
  const onChangeHandler = (text: string): void => {
    let newText = text.replace(/[^0-9]/g, '')

    if (props.cpf) {
      if (newText.length > 3) {
        newText = newText.substring(0, 3) + '.' + newText.substring(3)
      }
      if (newText.length > 7) {
        newText = newText.substring(0, 7) + '.' + newText.substring(7)
      }
      if (newText.length > 11) {
        newText = newText.substring(0, 11) + '-' + newText.substring(11)
      }
      if (newText.length > 14) {
        newText = newText.substring(0, 14)
      }
    } else if (props.date) {
      if (newText.length > 2) {
        const day = newText.substring(0, 2)
        if (parseInt(day) > 31) {
          newText = '31' + newText.substring(2)
        }
        newText = newText.substring(0, 2) + '/' + newText.substring(2)
      }
      if (newText.length > 5) {
        const month = newText.substring(3, 5)
        if (parseInt(month) > 12) {
          newText = newText.substring(0, 3) + '12' + newText.substring(5)
        }
        newText = newText.substring(0, 5) + '/' + newText.substring(5)
      }
      if (newText.length > 10) {
        newText = newText.substring(0, 10)
      }
    } else {
      newText = text
    }

    props.onChangeText && props.onChangeText(newText)
  }

  const inputProps = {
    ...props,
    onChangeText: onChangeHandler,
    style: [
      styles.input,
      {
        fontFamily: props.value
          ? 'Rawline-Medium'
          : 'Rawline-Medium-Italic',
        height: props.height || 36
      }
    ]
  }

  return (
    <>
      {props.label && <Text style={[styles.label]}>{props.label}</Text>}
      <View
        style={[
          styles.container,
          {
            marginTop: props.marginTop,
            marginBottom: props.marginBottom,
            marginLeft: props.marginLeft,
            marginRight: props.marginRight
          }
        ]}
      >
        <TextInput {...inputProps} testID={props.testID} />
      </View>
      <View style={styles.containerText}>

        {props.error && <Text style={styles.errorText}>{props.error}</Text>}
      </View>
    </>
  )
}
