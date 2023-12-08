import React, { ReactElement } from 'react'

import { Text, TouchableOpacity, View } from 'react-native'

import { CardProps } from './CardUser.props'
import { styles } from './CardUser.styles'
import { normalize } from '../../utils/normalize'

export const CardUser = (props: CardProps): ReactElement => {
  return (
    <TouchableOpacity
      style={
        {
          marginTop: props.marginTop,
          marginBottom: props.marginBottom
        }
      }
      onPress={props.onPress}
      activeOpacity={0.8}
      disabled={props.overlay || props.disabled}
    >
      {props.overlay ? <View style={styles.overlay} /> : null}
        <View style={styles.containerCard} >
          <View style={styles.containerContent} >
            <View style={styles.containerRow} >
              <View
                style={[
                  styles.containerShortName,
                  {
                    height: props.sizeAvatar || normalize(36),
                    width: props.sizeAvatar || normalize(36)
                  }
                ]}
              >
                <Text style={styles.shortName}>
                  {(props?.name &&
                    props?.name.split(' ')[0][0] +
                      props?.name.split(' ')[1][0]) ||
                    ''}
                </Text>
              </View>
              <View>
                <Text
                  style={[
                    styles.name,
                    {
                      marginBottom: props?.description ? normalize(3) : 0
                    }
                  ]}
                >
                  {props.name}
                </Text>
                {props?.description && (
                  <Text style={styles.description} >
                    {props.description}
                  </Text>
                )}
              </View>
            </View>
          <View>{props?.rightComponent && props.rightComponent}</View>
        </View>
      </View>
    </TouchableOpacity>
  )
}
