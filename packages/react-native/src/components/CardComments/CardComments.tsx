import React, { ReactElement } from 'react'

import { colors } from '@unifil/tokens'
import { Text, TouchableOpacity, View } from 'react-native'

import { CardCommentsProps } from './CardComments.props'
import { styles } from './CardComments.styles'

export const CardComments = (props: CardCommentsProps): ReactElement => {
  return (
    <View {...props}>
      <View style={styles.containerCard}>
        <View style={styles.row}>
          <View style={styles.containerDate}>
            <Text style={styles.textDate}>
              {props?.date}
            </Text>
          </View>
          <View
            style={[
              styles.containerStatus,
              {
                backgroundColor: props?.colorStatus ? props?.colorStatus : colors.gray300
              }
            ]}
          >
            <Text style={styles.textStatus}>
              {props.status}
            </Text>
          </View>
        </View>
        <Text style={styles.textComment}>
          {props.comment}
        </Text>
        <View style={styles.containerButtons}>
          {props?.buttons?.map((item) =>
            <TouchableOpacity
              key={item?.id}
              onPress={item?.onPress}
              disabled={item?.disabled}
              style={[
                styles.button,
                {
                  backgroundColor: item?.colorButton,
                  opacity: item?.disabled ? 0.3 : 1
                }
              ]}
            >
              <View>
                {item?.iconButton}
              </View>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  )
}
