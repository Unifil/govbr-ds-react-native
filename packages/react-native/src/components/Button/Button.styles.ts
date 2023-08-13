import {
  fontWeights,
  fontSizes,
  colors
} from '@unifil/tokens'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  primary: {
    backgroundColor: colors.blueSecondary,
    height: 45,
    width: '100%',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 0,
    marginBottom: 0
  },
  secondary: {
    backgroundColor: colors.white,
    borderColor: colors.blueSecondary,
    flexDirection: 'row',
    borderWidth: 1,
    height: 45,
    width: '100%',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  disabled: {
    backgroundColor: colors.blueSecondary,
    opacity: 0.7,
    height: 45,
    width: '100%',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 0,
    marginBottom: 0
  },
  textPrimary: {
    color: colors.white,
    fontWeight: fontWeights.bold,
    fontSize: fontSizes.md
  },
  textSecondary: {
    color: colors.blueSecondary,
    fontWeight: fontWeights.bold,
    fontSize: fontSizes.md
  }
})
