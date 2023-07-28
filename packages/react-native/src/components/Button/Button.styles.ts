import {
  fontWeights,
  fontSizes,
  colors
} from '@unifil/tokens'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  primary: {
    backgroundColor: colors.darkBlue,
    height: 31,
    width: '100%',
    borderRadius: 19,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 0,
    marginBottom: 0
  },
  secondary: {
    backgroundColor: colors.white,
    borderColor: colors.darkBlue,
    borderWidth: 1,
    height: 31,
    width: '100%',
    borderRadius: 19,
    alignItems: 'center',
    justifyContent: 'center'
  },
  third: {
    backgroundColor: colors.lightRed,
    height: 31,
    width: '100%',
    borderRadius: 19,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 0,
    marginBottom: 0
  },
  textPrimary: {
    color: colors.white,
    fontWeight: fontWeights.medium,
    fontSize: fontSizes.xs
  },
  textSecondary: {
    color: colors.darkBlue,
    fontWeight: fontWeights.medium,
    fontSize: fontSizes.xs
  }
})
