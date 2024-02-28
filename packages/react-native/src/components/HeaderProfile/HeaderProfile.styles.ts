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
    paddingRight: normalize(30)
  },
  content: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  statusBar: {
    top: -65,
    height: 70,
    backgroundColor: colors.weakBlueSecondary
  },
  text: {
    color: colors.blueSecondary,
    fontSize: fontSizes.xl,
    fontWeight: fontWeights.large,
    fontFamily: 'Rawline-Black'
  },
  profile: {
    color: colors.blueThird,
    fontSize: fontSizes.xl,
    fontWeight: fontWeights.large,
    fontFamily: 'Rawline-Black'
  },
  containerText: {
    flexDirection: 'column',
    marginLeft: normalize(18)
  },
  containerChildren: {
    marginTop: normalize(15)
  },
  button: {
    marginTop: normalize(24)
  },
  containerButton: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  circleName: {
    height: normalize(35),
    width: normalize(35),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.blueSecondary,
    borderRadius: 50,
    marginRight: normalize(4)
  },
  initialLetter: {
    color: colors.white,
    fontSize: fontSizes.lg,
    fontFamily: 'Rawline-Black'
  },
  textButton: {
    color: colors.blueSecondary,
    fontSize: fontSizes.lg,
    fontFamily: 'Rawline-Black'
  }
})
