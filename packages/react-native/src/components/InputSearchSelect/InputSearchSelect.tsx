/* eslint-disable no-sequences */
import React, { ReactElement } from 'react'

import { Text, TouchableOpacity, TextInput, FlatList } from 'react-native'

import { InputSelectProps } from './InputSearchSelect.props'
import { styles } from './InputSearchSelect.styles'

export const InputSearchSelect = (props: InputSelectProps): ReactElement => {
  const inputProps = {
    ...props,
    style: [
      styles.inputSearch,
      {
        fontFamily: props.value.length >= 1 ? 'Rawline-Medium' : 'Rawline-Medium-Italic'
      }
    ]
  }

  return (
    < >
      <TextInput {...inputProps} />
      {props?.isExpanded &&
        <FlatList
          nestedScrollEnabled={true}
          data={props?.dataDropdown}
          keyExtractor={(item: any) => item.value}
          style={[
            styles.dropdown,
            {
              right: props?.positionRight,
              left: props?.positionLeft,
              bottom: props?.positionBottom
            }
          ]}
          renderItem={({ item }: any) => (
            <TouchableOpacity
              key={item.value}
              style={styles.optionDropdown}
              onPress={() => {
                props?.onSelect(item.name, item.value)
              }}
            >
              <Text style={styles.textDropdown} >
                {item.name}
              </Text>
            </TouchableOpacity>
          )}
        />
      }
    </ >
  )
}
