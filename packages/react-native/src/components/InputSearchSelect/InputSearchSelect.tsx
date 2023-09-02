/* eslint-disable no-sequences */
import React, { ReactElement } from 'react'

import { Text, TouchableOpacity, TextInput, FlatList } from 'react-native'

import { InputSelectProps } from './InputSearchSelect.props'
import { styles } from './InputSearchSelect.styles'

export const InputSearchSelect = (props: InputSelectProps): ReactElement => {
  return (
    <>
      <TextInput
          style={styles.inputSearch}
          value={props.value}
          onChangeText={props.onChangeText}
          placeholder={props.placeholder}
        />
        {props?.isExpanded &&
            <FlatList
            data={props?.dataDropdown}
            keyExtractor={(index) => index.toString()}
            style={[
              styles.dropdown,
              {
                top: props?.positionTop,
                right: props?.positionRight,
                left: props?.positionLeft,
                bottom: props?.positionBottom
              }
            ]}
            renderItem={({ item }) => (
                <TouchableOpacity
                  key={item}
                  style={styles.optionDropdown}
                  onPress={() => {
                    props?.onSelect(item)
                  }}
                >
                  <Text style={styles.textDropdown} >
                    {item}
                  </Text>
                </TouchableOpacity>
            )}
            />
        }
    </>
  )
}
