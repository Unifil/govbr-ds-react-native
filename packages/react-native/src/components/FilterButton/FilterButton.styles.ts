import { fontWeights, fontSizes, colors } from '@unifil/tokens'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  filter: {
    backgroundColor: colors.white,
    paddingHorizontal: 15,
    paddingVertical: 11,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.white,
    borderRadius: 50,
    borderWidth: 1,
    marginRight: 10
  },
  text: {
    color: colors.darkBlue,
    fontSize: fontSizes.xs,
    fontWeight: fontWeights.medium
  },
  activeFilter: {
    backgroundColor: colors.weakGray,
    borderColor: colors.darkBlue,
    borderRadius: 50,
    borderWidth: 1
  },
  flatlist: {
    height: '100%',
    width: '100%',
    paddingHorizontal: 5
  }
})
