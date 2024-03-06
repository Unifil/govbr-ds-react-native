import React, { ReactElement } from 'react'

import { Text, TouchableOpacity, View } from 'react-native'

import { RadioProps } from './Radio.props'
import { styles } from './Radio.styles'

export const Radio = ({ label, isSelected, onPress, testID }: RadioProps): ReactElement => {
  return (
      <TouchableOpacity style={styles.radioContainer} onPress={onPress} testID={testID}>
          <View style={[styles.radio, isSelected && styles.radioSelected]} />
          <Text style={styles.label}>{label}</Text>
      </TouchableOpacity>
  )
}
