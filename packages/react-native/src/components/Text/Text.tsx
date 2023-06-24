import React, { ReactElement } from 'react'

import { Text, View } from 'react-native'

import { TextProps } from './Text.props'
import { styles } from './Text.styles'

export const TextComponent = (props: TextProps) => {
  return (
    <View>
      <Text
        style={[
          styles.text,
          {
            color: props.color,
            fontSize: props.size,
            lineHeight: props?.lineHeight,
            fontWeight: props?.weight
          }
        ]}
      >
        {props.text}
      </Text>
    </View>
  )
}
