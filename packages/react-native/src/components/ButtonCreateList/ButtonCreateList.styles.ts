import {
  fontWeights,
  fontSizes,
  colors
} from '@unifil/tokens'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  primary: {
    backgroundColor: colors.weakBlueSecondary,
    height: 45,
    width: '100%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 0,
    marginBottom: 0
  },
  secondary: {
    backgroundColor: colors.graySecondary,
    borderColor: colors.darkBlue,
    height: 45,
    width: '100%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textPrimary: {
    color: colors.blue,
    fontWeight: fontWeights.bold,
    fontSize: fontSizes.xs
  },
  textSecondary: {
    color: colors.darkBlue,
    fontWeight: fontWeights.bold,
    fontSize: fontSizes.xs
  }
})
