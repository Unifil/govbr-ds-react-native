/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { ReactElement } from 'react'

import { Text, TextInput, View } from 'react-native'

import { InputSearchProps } from './InputSearch.props'
import { styles } from './InputSearch.styles'

export const InputSearch = (props: InputSearchProps): ReactElement => {
  return (
    <>
      {props.label &&
        <Text style={[styles.label]}>{props.label}</Text>
      }
      <View style={[
        styles.container,
        {
          marginTop: props.marginTop,
          marginBottom: props.marginBottom,
          marginLeft: props.marginLeft,
          marginRight: props.marginRight
        }
      ]}>
        <TextInput
          placeholder={props.placeholder}
          placeholderTextColor={props.placeholderColor}
          onChangeText={props.onChangeText}
          value={props.value}
          onSubmitEditing={props.onSubmitEditing}
          style={[
            styles.input,
            {
              fontFamily: props.value
                ? 'Rawline-Medium'
                : 'Rawline-Medium-Italic'
            }
          ]}
        />
        <View style={styles.icon} >
          {props.icon}
        </View>
      </View>
    </>
  )
}
