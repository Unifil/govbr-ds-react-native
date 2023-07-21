import { colors } from '@unifil/tokens'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  containerScreen: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%'
  },
  background: {
    backgroundColor: '#333',
    opacity: 0.7,
    height: '100%',
    width: '100%'
  },
  containerModal: {
    position: 'absolute',
    backgroundColor: colors.white,
    borderRadius: 12,
    height: 480,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 0,
    paddingVertical: 0
  }
})
