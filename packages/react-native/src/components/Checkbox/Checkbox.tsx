 
/* eslint-disable react/jsx-key */
 
import React, { ReactElement } from 'react'

import { colors } from '@unifil/tokens'
import { TouchableOpacity, View } from 'react-native'

import { CheckboxProps } from './Checkbox.props'
import { styles } from './Ckeckbox.styles'

export const Checkbox = (props: CheckboxProps): ReactElement => {
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
