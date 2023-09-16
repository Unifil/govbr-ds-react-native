/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { ReactElement } from 'react'

import { Text, TextInput, View } from 'react-native'

import { InputSearchProps } from './InputSearch.props'
import { styles } from './InputSearch.styles'

export const InputSearch = (props: InputSearchProps): ReactElement => {
  const inputProps = {
    ...props,
    style: [
      styles.input,
      {
        fontFamily: props.value
          ? 'Rawline-Medium'
          : 'Rawline-Medium-Italic'
      }
    ]
  }

  const viewProps = {
    style: [
      styles.container,
      {
        marginTop: props.marginTop,
        marginBottom: props.marginBottom,
        marginLeft: props.marginLeft,
        marginRight: props.marginRight
      }
    ]
  }

  return (
    <>
      {props.label &&
        <Text style={[styles.label]}>{props.label}</Text>
      }
      <View {...viewProps}>
        <TextInput {...inputProps} />
        <View style={styles.icon} >
          {props.icon}
        </View>
      </View>
    </>
  )
}
