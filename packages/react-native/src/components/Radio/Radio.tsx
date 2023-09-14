/* eslint-disable react/jsx-key */
import React, { ReactElement, useEffect, useState } from 'react'

import { colors } from '@unifil/tokens'
import { Text, TouchableOpacity, View } from 'react-native'

import { RadioProps } from './Radio.props'
import { styles } from './Radio.styles'

export const Radio = (props: RadioProps): ReactElement => {
  const { options, flexDirection, onChange, value } = props

  // React to changes in the value prop and manage it with a state
  const [localValue, setLocalValue] = useState(props.value || [])

  const handleRadioChange = (index: number): void => {
    const newSelected = localValue.map((_: any, i: any) => i === index)
    setLocalValue(newSelected) // Update the local state
    onChange && onChange(newSelected) // Notify the form
  }

  useEffect(() => {
    setLocalValue(props.value)
  }, [props.value])

  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: flexDirection === 'row' ? 'row' : 'column'
        }
      ]}
    >
      {options?.map((item: any, index: any) =>
        <TouchableOpacity
          onPress={() => handleRadioChange(index)}
          key={item}
          style={[
            styles.containerRadio,
            {
              marginRight: (flexDirection === 'row' || flexDirection === 'column') ? 24 : 0
            }
          ]}
        >
          <View
            style={[
              styles.radio,
              {
                backgroundColor: value[index] ? colors.white : colors.white,
                borderWidth: value[index] ? 2 : 2
              }
            ]}
          >
            {value[index] && <View style={styles.radioSelected} />}
          </View>
          <Text style={styles.textRadio}>
            {item}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  )
}
