import { fontWeights, fontSizes, colors } from '@unifil/tokens'
import { StyleSheet } from 'react-native'

import { normalize } from '../../utils/normalize'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    position: 'relative',
    zIndex: 10,
    paddingHorizontal: normalize(15),
    paddingVertical: normalize(10),
    minHeight: normalize(60),
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4
    },
    flexDirection: 'row',
    shadowOpacity: 0.3,
    shadowRadius: 3.0,
    backgroundColor: colors.white,
    justifyContent: 'space-between',
    borderRadius: normalize(4)
  },
  titleCard: {
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.medium,
    color: colors.dark,
    fontFamily: 'Rawline-Medium',
    paddingRight: normalize(8)
  },
  descriptionCard: {
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.regular,
    color: colors.gray,
    fontFamily: 'Rawline-Medium',
    paddingRight: normalize(6)
  },
  containerTitle: {
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  containerValue: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: normalize(4),
    backgroundColor: colors.white,
    padding: normalize(5),
    width: normalize(80)
  },
  valueCard: {
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.medium,
    color: colors.white,
    fontFamily: 'Rawline-Medium'
  },
  containerText: {
    flex: 1
  }
})
