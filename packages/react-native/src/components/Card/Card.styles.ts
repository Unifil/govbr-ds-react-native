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
    borderRadius: radii.p,
    width: '100%',
    marginTop: 6,
    marginBottom: 6,
    minHeight: 105,
    elevation: 10,
    shadowColor: '#00000040',
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 1,
    shadowRadius: 0,
    borderWidth: 1,
    borderColor: '#CCCCCC'

  },
  containerContent: {
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'flex-start',
    width: '100%'
  },
  title: {
    color: colors.gray600,
    fontSize: fontSizes.xs,
    fontWeight: fontWeights.large,
    marginBottom: 3,
    fontFamily: 'Rawline-Black'
  },
  local: {
    color: colors.gray600,
    fontSize: fontSizes.xs,
    fontWeight: fontWeights.regular,
    maxWidth: 300,
    marginBottom: 10,
    fontFamily: 'Rawline-Regular'
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
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.medium,
    fontFamily: 'Rawline-Medium'
  },
  containerText: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    width: '100%',
    justifyContent: 'space-between'
  },
  containerTag: {
    backgroundColor: colors.weakBlue,
    height: 24,
    paddingHorizontal: 6,
    borderRadius: 4,
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flex: 1
  },
  icon: {
    bottom: 20
  }
})
