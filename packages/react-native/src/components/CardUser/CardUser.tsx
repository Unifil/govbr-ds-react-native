import React, { ReactElement } from 'react'

import { Text, TouchableOpacity, View } from 'react-native'

import { CardProps } from './CardUser.props'
import { styles } from './CardUser.styles'
import { normalize } from '../../utils/normalize'

export const CardUser = (props: CardProps): ReactElement => {
  return (
    <TouchableOpacity
      accessibilityLabel={props.accessibilityLabel}
      style={{
        marginTop: props.marginTop,
        marginBottom: props.marginBottom
      }}
      onPress={props.onPress}
      activeOpacity={0.6}
      disabled={props.overlay || props.disabled}
    >
      {props.overlay ? <View style={styles.overlay} /> : null}
      <View
        style={[
          styles.containerCard,
          {
            backgroundColor: props.backgroundColor
              ? props.backgroundColor
              : '#fff'
          }
        ]}
      >
        <View style={styles.containerContent}>
          <View style={styles.containerRow}>
            {props.iconReport ? (
              <View
                style={[
                  styles.containerIconReport,
                  {
                    height: props.sizeAvatar || normalize(36),
                    width: props.sizeAvatar || normalize(36)
                  }
                ]}
              >
                <View>{props.iconReport}</View>
              </View>
            ) : (
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
            )}
            <View>
              <Text
                style={[
                  styles.name,
                  {
                    marginBottom: props?.statusComponent ? normalize(4) : 0,
                    textTransform: props.upcaseName
                      ? 'uppercase'
                      : 'capitalize'
                  }
                ]}
              >
                {props.name}
              </Text>
              {props?.tagComponent && (
                <View style={styles.tagComponent}>
                  <Text style={styles.tagComponentText}>
                    {props.tagComponent}
                  </Text>
                </View>
              )}
              {props?.statusComponent && <Text>{props.statusComponent}</Text>}
              {props?.subTitle && (
                <View style={styles.containerSubTitle}>
                  <Text style={styles.subTitle} numberOfLines={1}>
                    {props.subTitle}
                  </Text>
                </View>
              )}
              {props?.description && (
                <View style={styles.containerDescription}>
                  <Text
                    style={styles.description}
                    numberOfLines={props.descriptionNumber || 1}
                  >
                    {props.description}
                  </Text>
                </View>
              )}
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}
