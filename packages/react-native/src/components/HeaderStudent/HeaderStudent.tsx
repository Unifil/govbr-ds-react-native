import React, { ReactElement } from 'react'

import { View, Text } from 'react-native'

import { HeaderStudentProps } from './HeaderStudent.props'
import { styles } from './HeaderStudent.styles'

export const HeaderStudent = (props: HeaderStudentProps): ReactElement => {
  return (
    <>
      <View style={styles.statusBar} />
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.containerShortName}>
            <Text style={styles.shortName}>{props.shortName}</Text>
          </View>
          <View style={styles.containerText}>
            <Text style={styles.nameStudent}>{props.nameStudent}</Text>
            <Text style={styles.class}>{props.class}</Text>
          </View>
        </View>
        <View style={styles.tagSchool}>
          <View>{props?.iconSchool}</View>
          <Text style={styles.school}>{props?.school}</Text>
        </View>
      </View>
    </>
  )
}
