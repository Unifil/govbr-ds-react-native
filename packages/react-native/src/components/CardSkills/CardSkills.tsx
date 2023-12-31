import React, { ReactElement, useState } from 'react'

import { colors } from '@unifil/tokens'
import { Text, TouchableHighlight, View } from 'react-native'

import { CardProps } from './CardSkills.props'
import { styles } from './CardSkills.styles'

export const CardSkills = (props: CardProps): ReactElement => {
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
                color: isPressed ? colors.white : props.colorTitle,
                fontSize: props.sizeTitle
              }
            ]}
          >
            {props.title}
          </Text>
          <Text
            style={[
              styles.text,
              {
                color: isPressed ? colors.white : props.colorText,
                opacity: isPressed ? 1 : 0.5,
                fontSize: props.sizeText
              }
            ]}
          >
            {props.text}
          </Text>
        </View>
        <View>{isPressed ? props.icon[0] : props.icon[1]}</View>
      </View>
    </TouchableHighlight>
  )
}
