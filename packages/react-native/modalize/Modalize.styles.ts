import { Dimensions, StyleSheet } from 'react-native'

const { height } = Dimensions.get('window')

export const styles = StyleSheet.create({
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
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8
  },
  handle: {
    height: 40,
    width: '100%',
    backgroundColor: 'lightgrey'
  }
})
