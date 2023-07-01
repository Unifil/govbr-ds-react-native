import { colors } from '@unifil/tokens'
import { StyleSheet, Dimensions } from 'react-native'

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
    justifyContent: 'flex-end'
  },
  containerContent: {
    backgroundColor: colors.white,
    height: height * 0.6,
    bottom: -200,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },
  handle: {
    height: 40,
    width: '100%',
    backgroundColor: 'lightgrey'
  },
  content: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    marginTop: 20
  },
  buttonExpand: {
    height: 4,
    width: 70,
    backgroundColor: 'lightgrey',
    borderRadius: 2,
    alignSelf: 'center',
    marginTop: 10
  }
})
