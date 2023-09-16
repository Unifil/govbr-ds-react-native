import { colors, fontSizes, fontWeights } from '@unifil/tokens'
import { StyleSheet } from 'react-native'

import { normalize } from '../../utils/normalize'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: normalize(16)
  },
  content: {
    paddingLeft: normalize(10),
    width: '100%',
    height: normalize(56),
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    marginTop: normalize(10)
  },
  title: {
    color: colors.dark,
    fontSize: fontSizes.xll,
    lineHeight: 31,
    fontWeight: fontWeights.large,
    fontFamily: 'Rawline-Black'
  },
  subtitle: {
    color: colors.dark,
    fontSize: fontSizes.sm,
    lineHeight: 21,
    fontWeight: fontWeights.regular,
    fontFamily: 'Rawline-Regular'
  },
  containerText: {
    flexDirection: 'column',
    marginLeft: normalize(18)
  },
  divider: {
    height: 1,
    width: '100%',
    backgroundColor: colors.graySecondary,
    borderRadius: normalize(5),
    marginTop: normalize(24),
    marginBottom: normalize(24)
  },
  button: {
    marginTop: normalize(24)
  }
})
