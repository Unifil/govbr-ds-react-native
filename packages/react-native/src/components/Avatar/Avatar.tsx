import React, { ReactElement } from 'react'

import { fontWeights, colors } from '@unifil/tokens'
import { View, Text } from 'react-native'

export const Avatar = (): ReactElement => {
  return (
    <View
      style={{
        width: 37,
        height: 37,
        borderRadius: 50,
        backgroundColor: colors.green,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Text
        style={{
          color: colors.white,
          fontSize: 16,
          fontWeight: fontWeights.normal
        }}
      >
        HS
      </Text>
    </View>
  )
}
