import React, { ReactElement } from 'react'

import { View, Modal } from 'react-native'

import { TextProps } from './Modal.props'
import { styles } from './Modal.styles'

export const ModalComponent = (props: TextProps): ReactElement => {
  return (
    <Modal transparent={true}>
      <View style={styles.containerScreen} onTouchEnd={props.onTouchEnd} >
        <View style={styles.background} />
        <View
          style={[
            styles.containerModal,
            {
              borderRadius: props.borderRadius,
              height: props.height,
              width: props.width,
              alignItems: props.alignItems,
              justifyContent: props.justifyContent,
              paddingHorizontal: props.paddingHorizontal,
              paddingVertical: props.paddingVertical
            }
          ]}
        >
          {props.children}
        </View>
      </View>
    </Modal>
  )
}
