import { colors, fontSizes, fontWeights } from '@unifil/tokens'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 16
  },
  content: {
    paddingLeft: 10,
    width: '100%',
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white
  },
  title: {
    color: colors.dark,
    fontSize: fontSizes.xll,
    lineHeight: 31,
    fontWeight: fontWeights.large
  },
  subtitle: {
    color: colors.dark,
    fontSize: fontSizes.sm,
    lineHeight: 21,
    fontWeight: fontWeights.regular
  },
  containerText: {
    flexDirection: 'column',
    marginLeft: 18
  },
  divider: {
    height: 1,
    width: '90%',
    backgroundColor: colors.graySecondary,
    borderRadius: 5,
    marginTop: 24,
    marginBottom: 24
  },
  button: {
    marginTop: 24
  }
})
