/* eslint-disable react/jsx-key */
import React, { ReactElement, useState } from 'react'

import { colors } from '@unifil/tokens'
import { Text, TouchableOpacity, View } from 'react-native'

import { CheckboxProps } from './Checkbox.props'
import { styles } from './Ckeckbox.styles'

export const Checkbox = (props: CheckboxProps): ReactElement => {
  const initialCheckboxState = props?.textCheckbox?.map(() => false)
  const [checkboxStates, setCheckboxStates] = useState(initialCheckboxState)

  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/explicit-function-return-type
  const handleCheckboxChange = (index: any) => {
    setCheckboxStates((prevCheckboxStates: any) => {
      const newCheckboxStates = prevCheckboxStates.map((checkbox: any, i: any) =>
        props?.multipleSelection
          ? i === index
            ? !checkbox
            : checkbox
          : i === index
            ? !checkbox
            : false
      )
      return newCheckboxStates
    })
  }

  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: props?.flexDirection === 'row' ? 'row' : 'column'
        }
      ]}
    >
      {props?.textCheckbox?.map((item: any, index: any) =>
        <TouchableOpacity
          onPress={() => handleCheckboxChange(index)}
          key={item}
          style={[
            styles.containerCheckbox,
            {
              marginLeft: props?.flexDirection === ('row' || 'column') ? 24 : 0
            }
          ]}
        >
          <View
            style={[
              styles.checkbox,
              {
                backgroundColor: checkboxStates[index] ? colors.white : colors.white,
                borderWidth: checkboxStates[index] ? 2 : 2
              }
            ]}
            >
              {checkboxStates[index] && props?.icon}
          </View>
            <Text style={styles.textCheckbox}>
              {item}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  )
}
