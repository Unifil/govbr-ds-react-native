import React, { ReactElement } from 'react'

import { View, TouchableOpacity, Text } from 'react-native'

import { HeaderProfileProps } from './HeaderProfile.props'
import { styles } from './HeaderProfile.styles'

export const HeaderProfile = (props: HeaderProfileProps): ReactElement => {
  return (
    <>
      <View style={styles.statusBar} />
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.containerText}>
            <Text style={styles.text}>
              {props.text}
            </Text>
            <Text style={styles.profile}>
              {props.nameProfile}
            </Text>
            <View style={styles.containerChildren}>
              {props.children}
            </View>
          </View>
          <View style={styles.column}>
            <View style={styles.circleName}>
              <Text style={styles.initialLetter}>
                {props.initialLetterProfile}
              </Text>
            </View>
            <TouchableOpacity onPress={props.onPress}>
              <Text style={styles.textButton}>
                {props.textButton}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  )
}
