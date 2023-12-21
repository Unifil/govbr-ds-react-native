import { fontWeights, fontSizes, colors } from '@unifil/tokens'
import { StyleSheet } from 'react-native'

import { normalize } from '../../utils/normalize'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    position: 'relative',
    zIndex: 10,
    padding: normalize(10)

  },
  containerCard: {
    width: '100%',
    minHeight: normalize(60),
    paddingHorizontal: normalize(15),
    paddingVertical: normalize(10),
    alignItems: 'center',
    elevation: 10,
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
    fontFamily: 'Rawline-Medium'
  },
  descriptionCard: {
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.regular,
    color: colors.gray,
    fontFamily: 'Rawline-Medium'
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
  }
})
