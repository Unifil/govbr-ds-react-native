import React, { ReactElement } from 'react'

import { View, TouchableOpacity, Text } from 'react-native'

import { HeaderProps } from './Header.props'
import { styles } from './Header.styles'

export const Header = (props: HeaderProps): ReactElement => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
      {props.onPress && (
        <TouchableOpacity onPress={props.onPress}>
          {props.icon}
        </TouchableOpacity>
      )}
        <View style={styles.containerText}>
          <Text style={styles.title}>
            {props.title}
          </Text>
          <Text style={styles.subtitle}>
            {props.subtitle}
          </Text>
        </View>
      </View>
      {props.children}
      {props.divider && <View style={styles.divider} />}
    </View>
  )
}
