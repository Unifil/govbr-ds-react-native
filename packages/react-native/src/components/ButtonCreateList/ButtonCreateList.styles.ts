import {
  fontWeights,
  fontSizes,
  colors
} from '@unifil/tokens'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  primary: {
    backgroundColor: colors.blueSecondary,
    height: 40,
    width: '100%',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  disabled: {
    backgroundColor: colors.blueSecondary,
    opacity: 0.7,
    borderColor: colors.darkBlue,
    height: 40,
    width: '100%',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  textPrimary: {
    color: colors.white,
    fontWeight: fontWeights.bold,
    fontSize: fontSizes.md,
    marginLeft: 0,
    marginRight: 0
  },
  textDisabled: {
    color: colors.white,
    fontWeight: fontWeights.bold,
    fontSize: fontSizes.md,
    opacity: 0.8,
    marginLeft: 0,
    marginRight: 0
  },
  iconPrimary: {
    backgroundColor: colors.white,
    height: 15,
    width: 15,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  iconDisabled: {
    backgroundColor: colors.white,
    height: 15,
    width: 15,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.8
  }
})
