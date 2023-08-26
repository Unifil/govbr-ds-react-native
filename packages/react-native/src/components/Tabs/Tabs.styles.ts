import { fontWeights, fontSizes, colors } from '@unifil/tokens'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  containerTabs: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    paddingHorizontal: 16
  },
  tab: {
    alignItems: 'center',
    width: '100%'
  },
  textTabs: {
    color: colors.blueSecondary,
    fontSize: fontSizes.md,
    fontWeight: fontWeights.bold,
    marginTop: 7,
    marginBottom: 16
  },
  tabButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
    borderBottomWidth: 1,
    borderBottomColor: colors.graySecondary
  },
  activeTabButton: {
    backgroundColor: 'transparent',
    borderBottomWidth: 4,
    borderBottomColor: colors.blueSecondary
  },
  flatlist: {
    height: '100%',
    top: 0,
    alignItems: 'center'
  }
})
