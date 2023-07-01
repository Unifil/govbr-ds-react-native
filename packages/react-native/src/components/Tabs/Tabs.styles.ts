import { fontWeights, fontSizes, colors } from '@unifil/tokens'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  containerTab: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  textTabs: {
    color: colors.darkBlue,
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.regular
  },
  pipe: {
    borderColor: colors.gray200,
    borderWidth: 1,
    height: 14,
    marginLeft: 8,
    marginRight: 8
  },
  countTabs: {
    backgroundColor: colors.darkBlue,
    minHeight: 16,
    minWidthwidth: 16,
    paddingVertical: 2,
    paddingHorizontal: 4,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5
  },
  textCount: {
    color: colors.white,
    fontSize: fontSizes.xxs,
    fontWeight: fontWeights.regular
  },
  tabButton: {
    paddingVertical: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  activeTabButton: {
    backgroundColor: 'transparent'
  },
  flatlist: { height: '100%', top: 0, alignItems: 'center' }
})
