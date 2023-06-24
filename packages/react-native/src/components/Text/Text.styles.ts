import {
  fontWeights,
  fontSizes,
  lineHeights,
  colors
} from '@unifil/tokens'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  text: {
    color: colors.blue,
    fontSize: fontSizes.xs,
    lineHeight: lineHeights.xs,
    fontWeight: fontWeights.regular
  }
})
