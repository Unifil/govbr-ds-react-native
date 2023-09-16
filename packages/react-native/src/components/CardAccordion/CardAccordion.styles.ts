import { fontWeights, fontSizes, colors } from '@unifil/tokens'
import { StyleSheet } from 'react-native'

import { normalize } from '../../utils/normalize'

export const styles = StyleSheet.create({
  checkbox: {
    width: normalize(24),
    height: normalize(24),
    backgroundColor: colors.white,
    borderRadius: normalize(50),
    marginRight: normalize(8),
    borderColor: colors.grayFourth,
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  itemChecked: {
    width: normalize(14),
    height: normalize(14),
    borderRadius: normalize(50),
    backgroundColor: colors.blueThird
  },
  containerCheckbox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: normalize(14),
    backgroundColor: colors.white,
    paddingHorizontal: normalize(12),
    borderBottomWidth: 1,
    borderColor: colors.grayFourth
  },
  textCheckbox: {
    color: colors.dark,
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.regular
  },
  containerList: {
    flexDirection: 'row',
    width: normalize(290)
  },
  containerTag: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: normalize(4),
    paddingHorizontal: normalize(12),
    borderRadius: normalize(4),
    marginRight: normalize(8),
    height: normalize(25),
    maxWidth: '100%',
    backgroundColor: colors.weakBlueSecondary,
    shadowColor: '#1351B4',
    shadowOffset: {
      width: 0.1,
      height: 0.1
    },
    shadowOpacity: 0.2,
    shadowRadius: 1
  },
  textTag: {
    color: colors.blueSecondary,
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.medium
  }
})
