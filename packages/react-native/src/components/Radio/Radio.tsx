/* eslint-disable react/jsx-key */
import React, { ReactElement, useEffect, useState } from 'react'

import { colors } from '@unifil/tokens'
import { Text, TouchableOpacity, View } from 'react-native'

import { RadioProps } from './Radio.props'
import { styles } from './Radio.styles'

export const Radio = (props: RadioProps): ReactElement => {
  const { options, flexDirection, onChange, value } = props
 
 
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);


  const handleRadioChange = (index: number): void => {
    setSelectedIndex(index);
    onChange && onChange(index);
  }
  
  
  useEffect(() => {
    setSelectedIndex(props.value);
  }, [props.value]);
   
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
          key={item}
          onPress={() => handleRadioChange(index)}
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
                backgroundColor: selectedIndex === index ? colors.white : colors.white,
                borderWidth: selectedIndex === index ? 2 : 2

              }
            ]}
          >
         {selectedIndex === index && <View style={styles.radioSelected} />}

          </View>
          <Text style={styles.textRadio}>
            {item}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  )
}
