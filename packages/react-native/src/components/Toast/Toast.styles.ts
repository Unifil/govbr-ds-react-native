import { colors, fontSizes, fontWeights } from '@unifil/tokens'
import { Platform, StyleSheet } from 'react-native'

import { normalize } from '../../utils/normalize'

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 10,
    top: Platform.OS === 'ios' ? normalize(65) : normalize(40),
    left: normalize(20),
    backgroundColor: colors.lightGreen,
    borderRadius: normalize(8),
    minHeight: normalize(56),
    width: '90%',
    justifyContent: 'center',
    paddingHorizontal: normalize(16)
  },
  containerMessage: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: '100%'
  },
  message: {
    color: colors.dark,
    fontSize: fontSizes.md,
    fontWeight: fontWeights.bold,
    marginLeft: normalize(8),
    fontFamily: 'Rawline-Bold'
  }
})
