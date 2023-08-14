import { fontWeights, fontSizes, colors } from '@unifil/tokens'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  checkbox: {
    width: 24,
    height: 24,
    backgroundColor: colors.white,
    borderRadius: 4,
    marginRight: 8,
    borderColor: colors.grayFourth,
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  containerCheckbox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 14,
    backgroundColor: colors.white,
    paddingHorizontal: 12,
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
    width: 290
  },
  containerTag: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 4,
    marginRight: 8,
    maxWidth: '100%',
    backgroundColor: colors.weakBlueThird,
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
