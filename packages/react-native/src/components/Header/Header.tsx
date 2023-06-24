import React, { ReactElement } from 'react'

import { View, TouchableOpacity } from 'react-native'

import { HeaderProps } from './Header.props'
import { styles } from './Header.styles'
import { Avatar } from '../Avatar/Avatar'

export const Header = (props: HeaderProps): ReactElement => {
  return (
    <View style={styles.container}>
      {props.onPress && (
        <TouchableOpacity onPress={props.onPress}>
          {props.icon}
        </TouchableOpacity>
      )}

      <View>{props.logo}</View>

      <Avatar></Avatar>
    </View>
  )
}
