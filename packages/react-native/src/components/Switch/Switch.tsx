import React, { ReactElement } from 'react'

import { colors } from '@unifil/tokens'
import { Switch as SwitchRN, Text, View } from 'react-native'

import { SwitchProps } from './Switch.props'
import { styles } from './Switch.styles'

export const Switch = ({ isEnabled, value, onValueChange, label }: SwitchProps): ReactElement => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        {label}
      </Text>
      <SwitchRN
        trackColor={{ false: colors.weakGray, true: colors.weakBlue }}
        thumbColor={isEnabled ? colors.blueThird : colors.weakGray}
        ios_backgroundColor={colors.weakGray}
        onValueChange={onValueChange}
        value={value}
      />
    </View>
  )
}
