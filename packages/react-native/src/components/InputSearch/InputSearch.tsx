/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { ReactElement, useState } from 'react'

import { TextInput, View } from 'react-native'

import { TextProps } from './InputSearch.props'
import { styles } from './InputSearch.styles'

export const InputSearch = (props: TextProps): ReactElement => {
  const [searchText, setSearchText] = useState('')

  const handleSearch = (text: string) => {
    setSearchText(text)
    props?.onSearch(text)
  }
  return (
    <View style={[
      styles.container,
      {
        marginTop: props.marginTop,
        marginBottom: props.marginBottom,
        marginLeft: props.marginLeft,
        marginRight: props.marginRight
      }
    ]}>
      <View style={styles.icon} >
        {props.icon}
      </View>
      <TextInput
        style={styles.input}
        placeholder={props.placeholder}
        placeholderTextColor={props.placeholderColor}
        onChangeText={handleSearch}
        value={searchText}
      />
    </View>
  )
}
