import {
  fontWeights,
  fontSizes,
  lineHeights,
  colors
} from '@unifil/tokens'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  primary: {
    color: colors.dark,
    fontSize: fontSizes.xl,
    fontWeight: fontWeights.large,
    fontFamily: 'Rawline-Black'
  },
  secondary: {
    color: colors.dark,
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.bold,
    fontFamily: 'Rawline-Bold'
  },
  custom: {
    color: colors.black,
    fontSize: fontSizes.xl,
    lineHeight: lineHeights.xll,
    fontWeight: fontWeights.medium,
    width: '100%',
    textAlign: 'center',
    fontFamily: 'Rawline-Black'
  }
})
