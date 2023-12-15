import React, { ReactElement } from 'react'

import { Text, TouchableOpacity, View } from 'react-native'

import { ICardClassification } from './CardClassification.props'
import { styles } from './CardClassification.styles'

export const CardClassification = ({
  title,
  description,
  onPress,
  value,
  marginTop,
  color,
  ...props
}: ICardClassification): ReactElement => {
  return (
    <TouchableOpacity
      style={[styles.container, {
        marginTop: marginTop || 0
      }]
      }
      onPress={onPress}
      activeOpacity={0.8}
      {...props}
    >
      <View style={styles.containerCard}>
        <View style={styles.containerTitle}>
          <Text style={styles.titleCard}>{title}</Text>
          {description && <Text style={styles.descriptionCard}>{description}</Text>}
        </View>

        <View style={[styles.containerValue, {
          backgroundColor: color || '#F2F2F2'
        }]}>
          <Text style={styles.valueCard}>{value}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}
