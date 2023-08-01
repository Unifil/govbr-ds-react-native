import React, { ReactElement } from 'react'

import { Text, View } from 'react-native'

import { TitleProps } from './Title.props'
import { styles } from './Title.styles'

export const Title = (props: TitleProps): ReactElement => {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  function renderTitle() {
    switch (props.type) {
      case 'primary':
        return (
          <TitlePrimary {...props} />
        )
      case 'secondary':
        return (
          <TitleSecondary {...props} />
        )
      case 'custom':
        return (
          <TitleCustom {...props} />
        )
    }
  }

  return <>{renderTitle()}</>
}

const TitlePrimary = (props: TitleProps): ReactElement => {
  return (
    <View>
      <Text style={styles.primary}>
        {props.text}
      </Text>
    </View>
  )
}

const TitleSecondary = (props: TitleProps): ReactElement => {
  return (
    <View>
      <Text
        style={[styles.secondary]}
      >
        {props.text}
      </Text>
    </View>
  )
}

const TitleCustom = (props: TitleProps): ReactElement => {
  return (
    <View>
      <Text
        style={[
          styles.custom,
          {
            color: props.color,
            fontSize: props.size,
            lineHeight: props?.lineHeight,
            fontWeight: props?.weight,
            textAlign: props?.align
          }
        ]}
      >
        {props.text}
      </Text>
    </View>
  )
}
