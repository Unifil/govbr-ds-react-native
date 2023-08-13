import React, { ReactElement } from 'react'

import { Text, TouchableOpacity, View } from 'react-native'

import { TabProps } from './CustomTab.props'
import { styles } from './CustomTab.styles'

export const CustomTab = (props: TabProps): ReactElement => {
  if (!props.showCustomTab) {
    return null as any
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {props.state.routes.map((route: any, index: any) => {
          const { options } = props.descriptors[route.key]
          const isFocused = props.state.index === index
          const color = isFocused
            ? props.tabBarActiveTintColor
            : props.tabBarInactiveTintColor

          if (!options.tabBarIcon) return null
          const Icon = options.tabBarIcon({ focused: isFocused, color })

          const onPress = (): void => {
            const event = props.navigation.emit({
              type: 'tabPress',
              target: route.key
            })

            if (!isFocused && !event.defaultPrevented) {
              props.navigation.navigate({
                name: route.name,
                merge: true
              })
            }
          }
          const onLongPress = (): void => {
            props.navigation.emit({
              type: 'tabLongPress',
              target: route.key
            })
          }

          return (
            <TouchableOpacity
              key={route.key}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.buttonTab}
            >
              <View style={{ alignItems: 'center', padding: 4 }}>
                <View style={{ padding: 8, borderRadius: 99 }}>{Icon}</View>
                <Text
                  style={{
                    color: isFocused
                      ? props.tabBarActiveTintColor
                      : props.tabBarInactiveTintColor,
                    fontFamily: 'Rawline-Black'
                  }}
                >
                  {options.tabBarLabel}
                </Text>
              </View>
            </TouchableOpacity>
          )
        })}
      </View>
    </View>
  )
}
