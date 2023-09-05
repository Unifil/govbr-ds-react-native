import { fontWeights, fontSizes, colors, radii } from '@unifil/tokens'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
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
    minHeight: 105,
    marginBottom: 16
  },
  container: {
    padding: 16,
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
    backgroundColor: colors.white,
    maxWidth: '100%'
  }
})
