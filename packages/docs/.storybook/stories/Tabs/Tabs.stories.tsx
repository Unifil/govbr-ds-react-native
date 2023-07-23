import React from 'react'

import { Tabs } from '@unifil/react-native'
import { View } from 'react-native'

const TabsMeta = {
  title: 'Tabs',
  component: Tabs,
  argTypes: {
    onPress: { action: 'pressed the button' }
  },
  args: {
    dataTab: [
      {
        name: 'Todas',
        count: 4
      },
      {
        name: 'Realizadas',
        count: 9
      }
    ],
    search: false,
    iconLeft: <View />,
  },
  decorators: [
    (Story: any) => (
      <View>
        <Story />
      </View>
    )
  ]
}

export default TabsMeta

export const Primary = {}
