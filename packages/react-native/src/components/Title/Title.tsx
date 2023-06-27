import React, { ReactElement } from 'react'

import { colors, fontSizes, fontWeights, lineHeights } from '@unifil/tokens'
import { Text, View } from 'react-native'

import { TitleProps } from './Title.props'

export const Title = ({
  color = colors.darkBlue,
  size = fontSizes.xl,
  weight = fontWeights.medium,
  lineHeight = lineHeights.xll,
  text
}: TitleProps): ReactElement => {
  return (
    <View>
      <Text
        style={{
          color,
          fontSize: size,
          fontWeight: weight,
          lineHeight
        }}
      >
        {text}
      </Text>
    </View>
  )
}
