import React, { useState, useEffect, ReactElement } from 'react'

import { colors } from '@unifil/tokens'
import { Text, Animated, View } from 'react-native'

import { ToastProps } from './Toast.props'
import { styles } from './Toast.styles'

export const Toast = (props: ToastProps): ReactElement => {
  const [slideAnim] = useState(new Animated.Value(300))

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true
    }).start()

    const timer = setTimeout(() => {
      Animated.timing(slideAnim, {
        toValue: 600,
        duration: 300,
        useNativeDriver: true
      }).start()
    }, props.duration ?? 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <Animated.View
      style={{
        ...styles.container,
        backgroundColor: props?.backgroundColor ? props?.backgroundColor
          : props?.type === 'success' ? colors.lightGreen
            : props?.type === 'error' ? colors.weakRed : colors.weakGray,
        transform: [{ translateX: slideAnim }]
      }}
    >
      <View style={styles.containerMessage}>
        <View>{props?.icon}</View>
        <Text
          style={[
            styles.message,
            {
              color: props?.colorText
            }
          ]}
        >
          {props?.message}
        </Text>
      </View>
    </Animated.View>
  )
}
