import { fontWeights, fontSizes, colors, radii } from '@unifil/tokens'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingLeft: 30,
    paddingRight: 17,
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: radii.px,
    width: '100%',
    marginTop: 6,
    marginBottom: 6,
    minHeight: 105,
    elevation: 10,
    shadowColor: '#00000040',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.5,
    shadowRadius: 3
  },
  containerContent: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%'
  },
  title: {
    color: colors.darkBlue,
    fontSize: fontSizes.md,
    fontWeight: fontWeights.medium,
    marginBottom: 3
  },
  local: {
    color: colors.darkBlue,
    fontSize: fontSizes.xxs,
    fontWeight: fontWeights.regular,
    maxWidth: 300,
    marginBottom: 10
  },
  text: {
    color: colors.blue,
    fontSize: fontSizes.xs,
    fontWeight: fontWeights.regular,
    opacity: 0.5,
    maxWidth: 300
  },
  textTag: {
    color: colors.darkBlue,
    fontSize: fontSizes.xxs,
    fontWeight: fontWeights.medium
  },
  containerTag: {
    backgroundColor: colors.weakBlue,
    height: 20,
    maxWidth: 80,
    paddingHorizontal: 6,
    paddingVertical: 4,
    borderRadius: 20,
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
