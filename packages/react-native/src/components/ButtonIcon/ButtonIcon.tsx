import React, { ReactElement } from 'react'

import { colors } from '@unifil/tokens'
import { TouchableOpacity, View } from 'react-native'

import { ButtonProps } from './ButtonIcon.props'
import { styles } from './ButtonIcon.styles'

export const ButtonIcon = ({
  icon,
  width,
  height,
  backgroundColor,
  onPress,
  disabled
}: ButtonProps): ReactElement => {
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <View
        style={[
          styles.container,
          {
            height: height || 30,
            width: width || 30,
            backgroundColor: backgroundColor || colors.blueSecondary,
            opacity: disabled ? 0.3 : 1
          }
        ]}
      >
        {icon}
      </View>
    </TouchableOpacity>
  )
}
