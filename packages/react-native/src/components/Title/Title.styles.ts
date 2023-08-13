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
    fontWeight: fontWeights.large
  },
  secondary: {
    color: colors.dark,
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.bold
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
