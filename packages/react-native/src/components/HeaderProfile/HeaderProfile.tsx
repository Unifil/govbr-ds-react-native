import React, { ReactElement } from 'react'

import { View, TouchableOpacity, Text } from 'react-native'

import { HeaderProfileProps } from './HeaderProfile.props'
import { styles } from './HeaderProfile.styles'

export const HeaderProfile = ({
  onPress,
  text,
  nameProfile,
  children,
  initialLetterProfile,
  icon
}: HeaderProfileProps): ReactElement => {
  return (
    <>
      <View style={styles.statusBar} />
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.containerText}>
            <Text style={styles.text}>
              {text}
            </Text>
            <Text style={styles.profile}>
              {nameProfile}
            </Text>
            <View style={styles.containerChildren}>
              {children}
            </View>
          </View>
          <TouchableOpacity onPress={onPress}>
            <View style={styles.containerButton}>
              <View style={styles.circleName}>
                <Text style={styles.initialLetter}>
                  {initialLetterProfile}
                </Text>
              </View>
              <View>
                {icon}
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </>
  )
}
