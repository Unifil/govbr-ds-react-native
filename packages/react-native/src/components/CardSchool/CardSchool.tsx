import React, { ReactElement, useState } from 'react'

import { colors } from '@unifil/tokens'
import { Text, TouchableHighlight, View } from 'react-native'

import { CardProps } from './CardSchool.props'
import { styles } from './CardShcool.styles'

export const CardSchool = (props: CardProps): ReactElement => {
  const [isPressed, setIsPressed] = useState(false)

  return (
    <TouchableHighlight
      style={[
        {
          borderRadius: props.borderRadius,
          height: props.height,
          width: props.width,
          marginTop: props.marginTop,
          marginBottom: props.marginBottom
        },
        styles.container
      ]}
      onPress={props.onPress}
      activeOpacity={0.8}
      underlayColor={colors.lightBlue}
      onShowUnderlay={() => {
        setIsPressed(true)
      }}
      onHideUnderlay={() => {
        setIsPressed(false)
      }}
    >
      <View style={[styles.containerContent]}>
        <View>
          <View style={[styles.containerTag]}>
            <Text style={[styles.textTag]}>{props.tag}</Text>
          </View>
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
        {<View
          style={[styles.icon]}
        >{isPressed ? props.icon : props.iconIsPressed}</View>}
      </View>
    </TouchableHighlight>
  )
}
