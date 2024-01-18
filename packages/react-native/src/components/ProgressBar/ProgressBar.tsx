import React, { ReactElement } from 'react'

import { Text, View } from 'react-native'

import { ProgressBarProps } from './ProgressBar.props'
import { styles } from './ProgressBar.styles'

export const ProgressBar = ({
  progress, exercise_list_name,
  qtd_total
}: ProgressBarProps): ReactElement => {
  return (
    <View style={styles.content}>
      <View style={styles.contentText}>
        <Text style={styles.textTitle}>
          Lista - {exercise_list_name}
        </Text>
        <Text style={styles.textTitle}>
          <Text style={styles.text}>
            {qtd_total}
          </Text>
          <Text style={styles.textGray}>
            registrados
          </Text>
        </Text>
      </View>
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
    </View>
  )
}
