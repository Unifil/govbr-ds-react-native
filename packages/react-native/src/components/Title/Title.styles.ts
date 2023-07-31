import {
  fontWeights,
  fontSizes,
  lineHeights,
  colors
} from '@unifil/tokens'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  primary: {
    color: colors.darkBlue,
    fontSize: fontSizes.xl,
    lineHeight: lineHeights.xll,
    fontWeight: fontWeights.medium
  },
  secondary: {
    color: colors.darkPurple,
    fontSize: fontSizes.xl,
    fontWeight: fontWeights.large,
    textAlign: 'center'
  },
  custom: {
    color: colors.black,
    fontSize: fontSizes.xl,
    lineHeight: lineHeights.xll,
    fontWeight: fontWeights.medium,
    width: '100%',
    textAlign: 'center'
  }
})
