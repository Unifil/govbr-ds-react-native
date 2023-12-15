import React, { ReactElement } from 'react'

import { colors } from '@unifil/tokens'
import { Text, TouchableOpacity, View } from 'react-native'

import { CardCommentsProps } from './CardComments.props'
import { styles } from './CardComments.styles'

export const CardComments = ({
  comment,
  date,
  status,
  colorStatus,
  onPressDelete,
  iconButtonDelete,
  disabledDelete,
  onPressUpdate,
  iconButtonUpdate,
  disabledUpdate,
  onPressCheck,
  iconButtonCheck,
  disabledCheck
}: CardCommentsProps): ReactElement => {
  return (
    <View>
      <View style={styles.containerCard}>
        <View style={styles.row}>
          <View style={styles.containerDate}>
            <Text style={styles.textDate}>
              {date}
            </Text>
          </View>
          <View
            style={[
              styles.containerStatus,
              {
                backgroundColor: colorStatus || colors.gray300
              }
            ]}
          >
            <Text style={styles.textStatus}>
              {status}
            </Text>
          </View>
        </View>
        <Text style={styles.textComment}>
          {comment}
        </Text>
        <View style={styles.containerButtons}>
          {onPressDelete &&
            <TouchableOpacity
              onPress={onPressDelete}
              disabled={disabledDelete}
              style={[
                styles.button,
                {
                  backgroundColor: colors.red,
                  opacity: disabledDelete ? 0.3 : 1
                }
              ]}
            >
              <View>
                {iconButtonDelete}
              </View>
            </TouchableOpacity>
          }
          {onPressCheck &&
            <TouchableOpacity
              onPress={onPressCheck}
              disabled={disabledCheck}
              style={[
                styles.button,
                {
                  backgroundColor: colors.green,
                  opacity: disabledCheck ? 0.3 : 1
                }
              ]}
            >
              <View>
                {iconButtonCheck}
              </View>
            </TouchableOpacity>
          }
          {onPressUpdate &&
            <TouchableOpacity
              onPress={onPressUpdate}
              disabled={disabledUpdate}
              style={[
                styles.button,
                {
                  backgroundColor: colors.blueSecondary,
                  opacity: disabledUpdate ? 0.3 : 1
                }
              ]}
            >
              <View>
                {iconButtonUpdate}
              </View>
            </TouchableOpacity>
          }
        </View>
      </View>
    </View>
  )
}
