import React, { ReactElement, useState } from 'react'

import { colors } from '@unifil/tokens'
import { Text, TouchableOpacity, View } from 'react-native'

import { CardProps } from './CardUser.props'
import { styles } from './CardUser.styles'

export const CardUser = (props: CardProps): ReactElement => {
  const [isPressed, setIsPressed] = useState(false)

  return (
    <TouchableOpacity
      style={[
        {
          borderRadius: props.borderRadius,
          height: props.height,
          width: props.width,
          marginTop: props.marginTop,
          marginBottom: props.marginBottom
        }
      ]}
      onPress={props.onPress}
      activeOpacity={0.8}
      disabled={props.overlay}
    >
      <View style={[styles.containere]}>
        {props.overlay ? <View style={styles.overlay} /> : null}
        <View style={[styles.container]}>
          <View style={[styles.containerContent]}>
            {props?.tag && (
              <View style={[styles.containerTag]}>
                <Text style={[styles.textTag]}>{props.tag}</Text>
              </View>
            )}
            <View style={[styles.containerText]}>
              <View>
                <Text
                  style={[
                    styles.title,
                    {
                      color: isPressed ? colors.white : props.colorTitle
                    }
                  ]}
                >
                  {props.title}
                </Text>
                <Text
                  style={[
                    styles.local,
                    {
                      color: isPressed ? colors.white : props.colorLocal
                    }
                  ]}
                >
                  {props.local}
                </Text>
              </View>
              {
                <View style={[styles.icon]}>
                  {isPressed ? props.icon : props.iconIsPressed}
                </View>
              }
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}
