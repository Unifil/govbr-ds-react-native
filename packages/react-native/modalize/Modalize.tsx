import React, { ReactElement } from 'react'

import {
  View,
  StyleSheet,
  Dimensions
} from 'react-native'

const { height } = Dimensions.get('window')

export const Modalize = ({
  isVisible,
  children
}: any): ReactElement => {
  return (
    <>
      {isVisible ? (
        <View style={[styles.container]}>
          <View style={[styles.content]}>
            <View
              style={{
                height: '100%',
                width: '100%',
                alignItems: 'center',
                marginTop: 20
              }}
            >
              {children}
            </View>
          </View>
        </View>
      ) : null}
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    position: 'absolute',
    justifyContent: 'flex-end',
    zIndex: 999
  },
  content: {
    backgroundColor: 'white',
    height: height * 0.5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },
  handle: {
    height: 40,
    width: '100%',
    backgroundColor: 'lightgrey'
  }
})
