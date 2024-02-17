import React, { ReactElement, useState } from 'react'

import { colors } from '@unifil/tokens'
import { Text, TouchableOpacity, View } from 'react-native'

import { CardProps } from './CardReport.props'
import { styles } from './CardReport.styles'
import { normalize } from '../../utils/normalize'
import { Checkbox } from '../Checkbox/Checkbox'

export const CardReport = (props: CardProps): ReactElement => {
  const [isPressed] = useState(false)
  return (
    <TouchableOpacity
      disabled={props.isCorrectQuestion}
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
    >
      <View style={[styles.containerCard]}>
        {props.overlay ? <View style={styles.overlay} /> : null}
        <View
          style={[
            {
              backgroundColor: props.isCorrectQuestion
                ? '#c6c6c6'
                : colors.white
            },
            styles.container
          ]}
        >
          <View style={[styles.containerContent]}>
            <View
              style={[
                styles.boxTag,
                {
                  marginBottom: props?.tag ? normalize(15) : 0
                }
              ]}
            >
              {props?.colorStatusGroup && (
                <View
                  style={[
                    styles.status,
                    {
                      backgroundColor: props?.colorStatusGroup
                    }
                  ]}
                />
              )}
              {props?.tag && (
                <View style={[styles.containerTag]}>
                  <Text
                    style={[
                      styles.textTag,
                      {
                        textTransform: props.textCapitalize
                          ? 'capitalize'
                          : 'none'
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
                      textTransform: props.textCapitalize
                        ? 'capitalize'
                        : 'none',
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
                      textTransform: props.textCapitalize
                        ? 'capitalize'
                        : 'none',
                      color: isPressed ? colors.white : props.colorText
                    }
                  ]}
                  numberOfLines={props?.numberOfLines}
                >
                  {props.description}
                </Text>
                {props.text && (
                  <Text
                    style={[
                      styles.description,
                      {
                        textTransform: props.textCapitalize
                          ? 'capitalize'
                          : 'none',
                        color: isPressed ? colors.white : props.colorText
                      }
                    ]}
                    numberOfLines={props?.numberOfLines}
                  >
                    {props.text}
                  </Text>
                )}
                {props.children && (
                  <View style={[styles.containerChildren]}>
                    {props.children}
                  </View>
                )}
              </View>
              <View style={[styles.icon]}>
                <Checkbox
                  onPress={props.onPress}
                  setCheckboxStates={props.setCheckboxStates}
                  checkboxStates={
                    props.isCorrectQuestion ? false : props.checkboxStates
                  }
                  multipleSelection={true}
                  icon={props.icon}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}
