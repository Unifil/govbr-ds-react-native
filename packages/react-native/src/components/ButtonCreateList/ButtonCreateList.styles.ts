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
    flexDirection: 'row'
  },
  disabled: {
    backgroundColor: colors.gray100,
    borderColor: colors.darkBlue,
    height: 45,
    width: '100%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  textPrimary: {
    color: colors.blue,
    fontWeight: fontWeights.bold,
    fontSize: fontSizes.xs
  },
  textDisabled: {
    color: colors.gray300,
    fontWeight: fontWeights.bold,
    fontSize: fontSizes.xs
  },
  iconPrimary: {
    backgroundColor: colors.darkBlue,
    height: 15,
    width: 15,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5
  },
  iconDisabled: {
    backgroundColor: colors.gray300,
    height: 15,
    width: 15,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5
  }
})
