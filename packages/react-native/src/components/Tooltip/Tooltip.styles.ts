import { colors, fontSizes, fontWeights } from '@unifil/tokens'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  containerScreen: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    backgroundColor: 'transparent',
    zIndex: 1,
    borderWidth: 1,
    borderColor: 'orange'

  },
  containerTooltip: {
    position: 'absolute',
    backgroundColor: colors.white,
    padding: 16,
    borderRadius: 8,
    // top: 0,
    // right: 0,
    // bottom: 0,
    // left: 0,
    marginTop: 10,
    zIndex: 9999999,
    elevation: 1,
    shadowColor: 'rgba(0, 0, 0, 0.12)',
    shadowOffset: {
      width: 2,
      height: 4
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    borderWidth: 1,
    borderColor: 'red'
  },
  containerTitle: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 12
  },
  title: {
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.bold,
    fontFamily: 'Rawline-Bold',
    color: colors.blue
  },
  text: {
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.regular,
    fontFamily: 'Rawline-Regular',
    color: colors.blue
  },
  arrow: {
    position: 'absolute',
    top: -18,
    left: 20,
    bottom: 0,
    right: 0,
    width: 0,
    height: 0,
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderBottomWidth: 18,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: colors.white,
    transform: [{ rotate: '0deg' }]
  }
})
