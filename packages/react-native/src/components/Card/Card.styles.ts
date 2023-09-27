import { fontWeights, fontSizes, colors, radii } from '@unifil/tokens'
import { StyleSheet } from 'react-native'

import { normalize } from '../../utils/normalize'

export const styles = StyleSheet.create({
  containerContent: {
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'flex-start',
    width: '100%'
  },
  title: {
    color: colors.gray600,
    fontSize: fontSizes.xs,
    fontWeight: fontWeights.large,
    marginBottom: normalize(3),
    fontFamily: 'Rawline-Black'
  },
  description: {
    color: colors.gray600,
    fontSize: fontSizes.xs,
    fontWeight: fontWeights.regular,
    maxWidth: normalize(250),
    fontFamily: 'Rawline-Regular'
  },
  text: {
    color: colors.blue,
    fontSize: fontSizes.xs,
    fontWeight: fontWeights.regular,
    opacity: 0.5,
    maxWidth: normalize(300)
  },
  textTag: {
    color: colors.darkBlue,
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.medium,
    fontFamily: 'Rawline-Medium'
  },
  containerText: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    width: '100%',
    justifyContent: 'space-between'
  },
  containerTag: {
    backgroundColor: colors.weakBlueSecondary,
    height: normalize(24),
    paddingHorizontal: normalize(6),
    borderRadius: normalize(4),
    marginBottom: normalize(15),
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flex: 1
  },
  icon: {
    bottom: normalize(10)
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: radii.p,
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: 10
  },
  containerCard: {
    width: '100%',
    minHeight: normalize(105)
  },
  container: {
    paddingHorizontal: normalize(16),
    paddingVertical: normalize(16),
    minHeight: 105,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10,
    shadowColor: '#00000040',
    shadowOffset: {
      width: 0,
      height: normalize(4)
    },
    shadowOpacity: 1,
    borderRadius: radii.p,
    shadowRadius: 0,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    backgroundColor: colors.white,
    maxWidth: '100%'
  }
})
