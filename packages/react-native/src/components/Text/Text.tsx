import React, { ReactElement } from 'react'

import { Text, View } from 'react-native'

import { TextProps } from './Text.props'
import { styles } from './Text.styles'

export const TextComponent = (props: TextProps): ReactElement => {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  function renderTitle() {
    switch (props.type) {
      case 'primary':
        return (
          <TextPrimary {...props} />
        )
      case 'custom':
        return (
          <TextCustom {...props} />
        )
    }
  }

  return <>{renderTitle()}</>
}

const TextPrimary = (props: TextProps): ReactElement => {
  return (
    <View>
      <Text style={styles.primary} testID={props.testID}>
        {props.text}
      </Text>
    </View>
  )
}

const TextCustom = (props: TextProps): ReactElement => {
  return (
    <View >
      <Text
        testID={props.testID}
        style={[
          styles.custom,
          {
            color: props.color,
            fontSize: props.size,
            fontWeight: props.weight,
            textAlign: props.align,
            fontFamily: props.fontFamily,
            textDecorationLine: props?.textDecoration
          }
        ]}
      >
        {props.text}
      </Text>
    </View>
  )
}
