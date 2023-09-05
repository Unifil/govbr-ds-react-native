import React, { ReactElement } from 'react'

import { View } from 'react-native'

import { ModalizeProps } from './Modalize.props'
import { styles } from './Modalize.styles'

export const Modalize = (props: ModalizeProps): ReactElement => {
  return (
    <>
      {props?.isVisible ? (
        <View style={[styles.container]}>
          <View
            style={[
              styles.content,
              {
                height: props?.height
              }
            ]}
          >
            {props?.children}
          </View>
        </View>
      ) : null}
    </>
  )
}
