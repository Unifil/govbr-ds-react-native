import { colors, fontSizes, fontWeights } from '@unifil/tokens'
import { StyleSheet } from 'react-native'

import { normalize } from '../../utils/normalize'

export const styles = StyleSheet.create({
  select: {
    minHeight: normalize(40),
    width: '100%',
    backgroundColor: colors.weakGray,
    borderRadius: normalize(4),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: normalize(12)
  },
  placeholder: {
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.regular,
    color: colors.gray,
    fontFamily: 'Rawline-Medium-Italic'
  },
  optionDropdown: {
    width: '100%',
    height: normalize(50),
    paddingHorizontal: normalize(16),
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: colors.grayFourth,
    zIndex: 100
  },
  dropdown: {
    opacity: 0,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.0,
    elevation: 2,
    backgroundColor: colors.white,
    borderRadius: normalize(4),
    borderWidth: 1,
    borderColor: colors.grayFourth,
    width: '100%',
    minHeight: normalize(150),
    maxHeight: normalize(150),
    marginTop: normalize(5),
    zIndex: 20
  },
  textDropdown: {
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.medium,
    color: colors.dark,
    fontFamily: 'Rawline-Medium'
  },
  container: {
    width: '100%',
    position: 'relative',
    zIndex: 10
  }
})
