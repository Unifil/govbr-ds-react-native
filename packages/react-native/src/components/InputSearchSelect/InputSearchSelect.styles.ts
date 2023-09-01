import { colors, fontSizes, fontWeights } from '@unifil/tokens'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  inputSearch: {
    minHeight: 40,
    width: '100%',
    backgroundColor: colors.weakGray,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
    fontFamily: 'Rawline-Medium-Italic'
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
    elevation: 3,
    backgroundColor: colors.white,
    position: 'absolute',
    zIndex: 9999999,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: colors.grayFourth,
    width: '100%',
    minHeight: 50,
    maxHeight: 300,
    top: 0,
    right: 0,
    left: 0,
    bottom: 0
  },
  textDropdown: {
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.medium,
    color: colors.dark,
    fontFamily: 'Rawline-Medium'
  }
})
