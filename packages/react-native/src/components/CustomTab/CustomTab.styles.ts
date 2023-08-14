import { colors } from '@unifil/tokens'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 110,
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-between'
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
    borderTopWidth: 1

  },
  buttonTab: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})
