import React, { ReactElement, useState } from 'react'

import { colors } from '@unifil/tokens'
import { Text, TouchableHighlight, View } from 'react-native'

import { CardProps } from './CardActivities.props'
import { styles } from './CardActivities.styles'

export const CardActivities = (props: CardProps): ReactElement => {
  const [isPressed, setIsPressed] = useState(false)

  return (
    <TouchableHighlight
      style={[
        styles.container,
        {
          backgroundColor: props.isChecked ? colors.weakGray : colors.white
        }
      ]}
      onPress={props.onPress}
      activeOpacity={0.8}
      underlayColor={props.isChecked ? '' : colors.lightBlue}
      onShowUnderlay={() => {
        setIsPressed(true)
      }}
      onHideUnderlay={() => {
        setIsPressed(false)
      }}
    >
      <View style={[styles.containerContent]}>
        <View style={[styles.containerTitle]} >
          <View
            style={[
              styles.checkbox,
              {
                backgroundColor: props.isChecked ? colors.green : colors.white,
                borderColor: props.isChecked ? 'none' : colors.lightGray,
                borderWidth: props.isChecked ? 0 : 1
              }
            ]}
          >
            {props.isChecked ? props.iconCheck : null}
          </View>
            <View>
              <Text
                style={[
                  styles.title,
                  {
                    color: isPressed && !props.isChecked ? colors.white : props.colorTitle,
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
                    color: isPressed && !props.isChecked ? colors.white : props.colorText,
                    fontSize: props.sizeText
                  }
                ]}
              >
                {props.subtitle}
              </Text>
            </View>
          </View>
        <View style={[styles.containerGroup]}>
          <View
              style={[
                styles.cardGroup,
                {
                  backgroundColor: props.colorGroup
                }
              ]}
            >
              <Text
                style={[
                  styles.textGroup,
                  {
                    color: props.colorTextGroup
                  }
                ]}
              >
              {props.textGroup}
              </Text>
          </View>
        </View>
      </View>
    </TouchableHighlight>
  )
}
