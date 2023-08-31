import { colors } from '@unifil/tokens'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: 100

  },
  content: {
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    bottom: 0,
    backgroundColor: colors.white,
    flexDirection: 'row',
    elevation: 10,
    borderTopColor: '#e6e6e6',
    borderTopWidth: 1,
    paddingBottom: 30

  },
  buttonTab: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  overlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 10

  }
})
