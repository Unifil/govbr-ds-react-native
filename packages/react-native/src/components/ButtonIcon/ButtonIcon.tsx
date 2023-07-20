import React, { ReactElement } from 'react'

import { TouchableOpacity } from 'react-native'

import { ButtonProps } from './ButtonIcon.props'
import { styles } from './ButtonIcon.styles'

export const ButtonIcon = (props: ButtonProps): ReactElement => {
  return (
    <TouchableOpacity onPress={props.onPress} style={[styles.container]}>
      {props.icon}
    </TouchableOpacity>
  )
}
