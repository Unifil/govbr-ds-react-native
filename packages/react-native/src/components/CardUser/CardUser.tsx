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
      disabled={props.overlay || props.disabled}
    >
      <View style={[styles.containere]}>
        {props.overlay ? <View style={styles.overlay} /> : null}
        <View style={[styles.container]}>

        
          <View style={[styles.containerContent]}>
         
            <View style={[styles.containerText]}>
            <View style={{
              marginRight: 20,
                    backgroundColor: '#168821',
                    height: 50,
                    width: 50,
                    borderRadius: 25,
                    justifyContent: 'center',
                    alignItems: 'center'
          }}>
                <Text style={{
                  fontSize: 20,
                  fontFamily: 'Rawline-Black',
                  color: 'white'

                }}>
                  {props?.name && props?.name.split(' ')[0][0] + props?.name.split(' ')[1][0] || ''}
                </Text>
          </View>
              <View style={[
                styles.containerTextDescription,
              ]}>
                <Text
                  style={[
                    styles.name,
                    {
                      color: isPressed ? colors.white : props.colorName
                    }
                  ]}
                >
                  {props.name}
                </Text>
                <Text
                  style={[
                    styles.description,
                    {
                      color: isPressed ? colors.white : props.colorLocal
                    }
                  ]}
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
            <View>
             {props?.leftComponent && props.leftComponent}
             </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}
