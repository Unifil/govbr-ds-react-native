import { colors, fontSizes } from '@unifil/tokens'
import { StyleSheet } from 'react-native'

import { normalize } from '../../utils/normalize'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: normalize(16)
  },
  label: {
    color: colors.dark,
    fontSize: fontSizes.sm,
    fontFamily: 'Rawline-Regular'
  }
})
