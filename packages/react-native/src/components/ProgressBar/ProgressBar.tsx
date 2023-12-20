import React, { ReactElement } from 'react'

import { Text, View } from 'react-native'

import { ProgressBarProps } from './ProgressBar.props'
import { styles } from './ProgressBar.styles'

export const ProgressBar = ({ progress }: ProgressBarProps): ReactElement => {
  return (
    <View style={styles.container}>
      <View style={styles.containerRow}>
        <View style={styles.progressBarBackground} />
        <View style={styles.ContainerProgressBar}>
          <View
            style={[
              styles.progressBar,
              {
                width: progress ? `${progress}%` : '0%'
              }
            ]}
          />
        </View>
      </View>
      <Text style={styles.text}>
        {progress}%
      </Text>
    </View>
  )
}
