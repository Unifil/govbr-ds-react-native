import { colors } from '@unifil/tokens'
import { StyleSheet } from 'react-native'

import { normalize } from '../../utils/normalize'

export const styles = StyleSheet.create({
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  radio: {
    width: normalize(20),
    height: normalize(20),
    borderRadius: 50,
    borderWidth: 2,
    borderColor: colors.blueSecondary,
    marginRight: normalize(8)
  },
  radioSelected: {
    backgroundColor: colors.blueSecondary
  },
  label: {
    fontSize: 16,
    fontFamily: 'Rawline-Medium',
    lineHeight: 18
  }
})
