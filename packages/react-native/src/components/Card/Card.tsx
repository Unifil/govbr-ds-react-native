import React, { ReactElement, useState } from 'react'

import { colors } from '@unifil/tokens'
import { Text, TouchableOpacity, View } from 'react-native'

import { CardProps } from './Card.props'
import { styles } from './Card.styles'

export const Card = (props: CardProps): ReactElement => {
  const [isPressed] = useState(false)

  return (
    <TouchableOpacity
      testID={props.testID}
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
      <View style={[styles.containerCard]}>
        {props.overlay ? <View style={styles.overlay} /> : null}
        <View
          style={styles.container}
        >
          <View style={[styles.containerContent]}>
            <View style={[styles.boxTag]}>
              {props?.colorStatusGroup &&
                <View
                  style={[
                    styles.status,
                    {
                      backgroundColor: props?.colorStatusGroup
                    }
                  ]}
                />
              }
              {props?.tag && (
                <View style={[styles.containerTag]}>
                  <Text
                    style={[styles.textTag,
                      {
                        textTransform: props.textCapitalize ? 'capitalize' : 'none'
                      }
                    ]}
                  >
                    {props.tag}
                  </Text>
                </View>
              )}
            </View>
            <View style={[styles.containerText]}>
              <View>
                <Text
                  style={[
                    styles.title,
                    {
                      textTransform: props.textCapitalize ? 'capitalize' : 'none',
                      color: isPressed ? colors.white : props.colorTitle
                    }
                  ]}
                >
                  {props.title}
                </Text>
                <Text
                  style={[
                    styles.description,
                    {
                      textTransform: props.textCapitalize ? 'capitalize' : 'none',
                      color: isPressed ? colors.white : props.colorLocal
                    }
                  ]}
                  numberOfLines={props?.numberOfLines}
                >
                  {props.description}
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
