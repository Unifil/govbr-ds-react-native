/* eslint-disable react/jsx-key */
import React, { ReactElement, useState } from 'react'

import { colors } from '@unifil/tokens'
import { Text, TouchableOpacity, View } from 'react-native'

import { RadioProps } from './Radio.props'
import { styles } from './Radio.styles'

export const Radio = (props: RadioProps): ReactElement => {
  const initialRadioState = props?.options?.map(() => false)
  const [selected, setSelected] = useState(initialRadioState)

  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/explicit-function-return-type
  const handleRadioChange = (index: any) => {
    setSelected((prevRadioState: any) => {
      const newSelected = prevRadioState.map((radio: any, i: any) =>
        i === index
          ? !radio
          : false
      )
      return newSelected
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
      {props?.options?.map((item: any, index: any) =>
        <TouchableOpacity
          onPress={() => handleRadioChange(index)}
          key={item}
          style={[
            styles.containerRadio,
            {
              marginRight: props?.flexDirection === ('row' || 'column') ? 24 : 0
            }
          ]}
        >
          <View
            style={[
              styles.radio,
              {
                backgroundColor: selected[index] ? colors.white : colors.white,
                borderWidth: selected[index] ? 2 : 2
              }
            ]}
            >
              {selected[index] && <View style={styles.radioSelected} />}
          </View>
            <Text style={styles.textRadio}>
              {item}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  )
}
