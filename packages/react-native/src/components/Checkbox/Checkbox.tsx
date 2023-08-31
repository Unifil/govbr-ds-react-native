/* eslint-disable react/jsx-key */
import React, { ReactElement, useState } from 'react'

import { colors } from '@unifil/tokens'
import { TouchableOpacity, View } from 'react-native'

import { CheckboxProps } from './Checkbox.props'
import { styles } from './Ckeckbox.styles'

export const Checkbox = (props: CheckboxProps): ReactElement => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/explicit-function-return-type

  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: props?.flexDirection === 'row' ? 'row' : 'column'
        }
      ]}
    >

        <TouchableOpacity
          style={[
            styles.containerCheckbox,
            {
              marginLeft: props?.flexDirection === ('row' || 'column') ? 24 : 0
            }
          ]}
          onPress={props.onPress}
        >
          <View
            style={[
              styles.checkbox,
              {
                backgroundColor: colors.white,
                borderWidth: 2
              }
            ]}
            >
              {props.checkboxStates && props?.icon}
          </View>

        </TouchableOpacity>

    </View>
  )
}
