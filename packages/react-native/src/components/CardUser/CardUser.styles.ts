import { fontWeights, fontSizes, colors, radii } from '@unifil/tokens'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  containerContent: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center'
  },
  name: {
    color: colors.gray600,
    fontSize: fontSizes.md,
    fontWeight: fontWeights.large,
    marginBottom: 3,
    fontFamily: 'Rawline-Black',
    textTransform: 'capitalize'
  },
  description: {
    color: colors.gray600,
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.regular,
    maxWidth: 300,
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
    flexDirection: 'row'
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
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: radii.p,
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: 10
  },
  containerCard: {
    width: '100%',
    marginTop: 6,
    marginBottom: 6,
    minHeight: 105
  },
  container: {
    height: 100,
    paddingLeft: 30,
    paddingRight: 17,
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10,
    shadowColor: '#00000040',
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 1,
    borderRadius: radii.p,
    shadowRadius: 0,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    backgroundColor: colors.white

  },
  containerTextDescription: {
    justifyContent: 'center'
  }
})
