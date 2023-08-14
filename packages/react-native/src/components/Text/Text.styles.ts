import {
  fontWeights,
  fontSizes,
  colors
} from '@unifil/tokens'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  primary: {
    color: colors.dark,
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.regular,
    fontFamily: 'Rawline-Regular'
  },
  custom: {
    color: colors.dark,
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.regular
  }
})
