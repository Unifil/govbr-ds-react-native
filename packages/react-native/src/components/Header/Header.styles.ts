import { colors, fontSizes, fontWeights } from '@unifil/tokens'
import { StyleSheet } from 'react-native'

import { normalize } from '../../utils/normalize'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: normalize(20),
    backgroundColor: colors.white,
    top: 0
  },
  statusBar: {
    top: -70,
    height: 80,
    backgroundColor: colors.weakBlueSecondary
  },
  content: {
    width: '100%',
    height: normalize(56),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    marginTop: normalize(20),
    marginBottom: 0
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
    fontFamily: 'Rawline-Regular',
    maxWidth: 300
  },
  containerText: {
    flexDirection: 'column',
    marginLeft: normalize(18),
    width: '80%'
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
  },
  boxHelp: {
    minWidth: normalize(30),
    alignItems: 'flex-end'
  },
  box: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})
