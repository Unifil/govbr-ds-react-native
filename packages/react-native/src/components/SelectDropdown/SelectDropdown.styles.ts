import { colors, fontSizes, fontWeights } from '@unifil/tokens'
import { StyleSheet } from 'react-native'

import { normalize } from '../../utils/normalize'

export const styles = StyleSheet.create({
  containerText: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 10
  },
  select: {
    minHeight: normalize(40),
    width: '100%',
    backgroundColor: colors.weakGray,
    borderRadius: normalize(4),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

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
    maxHeight: normalize(150),
    marginTop: normalize(5),
    zIndex: 100,
    position: 'absolute',
    top: normalize(40)
  },
  textDropdown: {
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.medium,
    color: colors.dark,
    fontFamily: 'Rawline-Medium'
  },
  empty: {
    width: '100%',
    height: normalize(50),
    paddingHorizontal: normalize(16),
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: colors.grayFourth
  },
  textEmpty: {
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.medium,
    color: colors.dark,
    fontFamily: 'Rawline-Medium'
  }
})
