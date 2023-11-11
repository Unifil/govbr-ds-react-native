import React, { ReactElement } from 'react'

import { View, TouchableOpacity, Text } from 'react-native'

import { HeaderProps } from './Header.props'
import { styles } from './Header.styles'
import { normalize } from '../../utils/normalize'

export const Header = (props: HeaderProps): ReactElement => {
  return (
    <>
      {props?.backgroundColor && <View style={styles.statusBar} />}
      <View
        style={[
          styles.container,
          {
            backgroundColor: props?.backgroundColor,
            top: props?.backgroundColor ? -90 : 0
          }
        ]}
      >
        <View
          style={[
            styles.content,
            {
              backgroundColor: props?.backgroundColor,
              marginBottom: props?.backgroundColor ? normalize(50) : 0
            }
          ]}
        >
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
          {props.onPress && (
            <View style={styles.boxHelp}>
              <TouchableOpacity onPress={props.onPressHelp}>
                {props.iconHelp}
              </TouchableOpacity>
            </View>
          )}
        </View>
        {props.children}
        {props.divider && <View style={styles.divider} />}
      </View>
    </>
  )
}
