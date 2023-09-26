import { colors, fontSizes, fontWeights } from '@unifil/tokens'
import { StyleSheet } from 'react-native'

import { normalize } from '../../utils/normalize'

export const styles = StyleSheet.create({
  inputSearch: {
    minHeight: 40,
    width: '100%',
    backgroundColor: colors.weakGray,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12
  },
  placeholder: {
    color: 'red'
  },
  optionDropdown: {
    width: '100%',
    height: 50,
    paddingHorizontal: 16,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: colors.grayFourth
  },
  dropdown: {
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.0,
    elevation: 2,
    backgroundColor: colors.white,
    position: 'absolute',
    marginTop: normalize(52),
    borderRadius: 4,
    borderWidth: 1,
    borderColor: colors.grayFourth,
    width: '100%',
    minHeight: 50,
    maxHeight: 300
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
    zIndex: 999
  }
})
