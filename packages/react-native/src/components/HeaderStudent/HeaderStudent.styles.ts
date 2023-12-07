import { colors, fontSizes, fontWeights } from '@unifil/tokens'
import { StyleSheet } from 'react-native'

import { normalize } from '../../utils/normalize'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: colors.weakBlueSecondary,
    paddingBottom: 40,
    paddingTop: normalize(5),
    top: normalize(-70),
    paddingLeft: normalize(20),
    paddingRight: normalize(30)
  },
  content: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center'
  },
  statusBar: {
    top: -70,
    height: 70,
    backgroundColor: colors.weakBlueSecondary
  },
  class: {
    color: colors.blueSecondary,
    fontSize: fontSizes.xl,
    fontWeight: fontWeights.large,
    fontFamily: 'Rawline-Black',
    opacity: 0.7
  },
  nameStudent: {
    color: colors.blueThird,
    fontSize: fontSizes.xl,
    fontWeight: fontWeights.large,
    fontFamily: 'Rawline-Black'
  },
  containerText: {
    flexDirection: 'column',
    marginLeft: normalize(16)
  },
  containerShortName: {
    height: normalize(40),
    width: normalize(40),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.green,
    borderRadius: 50
  },
  shortName: {
    color: colors.white,
    fontSize: fontSizes.md,
    fontFamily: 'Rawline-Bold'
  },
  tagSchool: {
    backgroundColor: '#f9fcff',
    paddingVertical: normalize(4),
    paddingHorizontal: normalize(12),
    marginTop: normalize(12),
    borderRadius: 4,
    elevation: 3,
    shadowColor: '#00000020',
    shadowOffset: {
      width: 1,
      height: 1
    },
    shadowOpacity: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%'
  },
  school: {
    fontSize: fontSizes.sm,
    fontFamily: 'Rawline-Medium',
    color: colors.blueSecondary,
    marginLeft: 6,
    marginBottom: 2
  }
})
