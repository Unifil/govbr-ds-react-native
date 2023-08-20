import { colors, fontSizes, fontWeights } from '@unifil/tokens'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 9999999,
    top: 65,
    left: 20,
    backgroundColor: colors.lightGreen,
    borderRadius: 8,
    minHeight: 56,
    width: '90%',
    justifyContent: 'center',
    paddingHorizontal: 16
  },
  containerMessage: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%'
  },
  message: {
    color: colors.dark,
    fontSize: fontSizes.md,
    fontWeight: fontWeights.bold,
    marginLeft: 8,
    fontFamily: 'Rawline-Bold'
  }
})
