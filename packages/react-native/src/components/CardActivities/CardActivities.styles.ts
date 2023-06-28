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
    width: '100%'
  },
  title: {
    color: colors.darkBlue,
    fontSize: fontSizes.md,
    fontWeight: fontWeights.regular,
    marginBottom: 6
  },
  text: {
    color: colors.gray,
    fontSize: fontSizes.xxs,
    fontWeight: fontWeights.regular
  },
  containerGroup: {
    width: '100%',
    alignItems: 'flex-end'
  },
  cardGroup: {
    paddingVertical: 5,
    paddingHorizontal: 12,
    backgroundColor: colors.gray100,
    borderRadius: 20
  },
  textGroup: {
    color: colors.black,
    fontSize: fontSizes.xxs,
    fontWeight: fontWeights.regular
  },
  checkbox: {
    width: 24,
    height: 24,
    backgroundColor: colors.green,
    borderRadius: 50,
    marginRight: 12,
    borderColor: colors.lightGray,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  containerTitle: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})
