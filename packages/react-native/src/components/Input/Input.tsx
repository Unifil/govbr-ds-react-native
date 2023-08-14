import React, { ReactElement, useState } from 'react'

import { Text, TextInput, View } from 'react-native'

import { TextProps } from './Input.props'
import { styles } from './Input.styles'

export const Input = (props: TextProps): ReactElement => {
  const [formattedValue, setFormattedValue] = useState('')

  const onChangeHandler = (text: string): void => {
    let newText = text.replace(/[^0-9]/g, '')

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

    setFormattedValue(newText)
    props.onChangeText && props.onChangeText(newText)
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
        <TextInput
          style={[
            styles.input,
            {
              fontFamily: props.value
                ? 'Rawline-Medium'
                : 'Rawline-Medium-Italic'
            }
          ]}
          placeholder={props.placeholder}
          placeholderTextColor={props.placeholderColor}
          onChangeText={props.date ? onChangeHandler : props.onChangeText}
          value={props.date ? formattedValue : props.value}
          onSubmitEditing={props.onSubmitEditing}
        />
      </View>
      {props.error && <Text style={styles.errorText}>{props.error}</Text>}
    </>
  )
}
