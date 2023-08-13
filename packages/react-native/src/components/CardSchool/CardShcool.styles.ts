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
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%'
  },
  title: {
    color: colors.gray600,
    fontSize: fontSizes.xs,
    fontWeight: fontWeights.large,
    marginBottom: 3
  },
  local: {
    color: colors.gray600,
    fontSize: fontSizes.xs,
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
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.medium
  },
  containerTag: {
    backgroundColor: colors.weakBlue,
    height: 24,
    width: 152,
    paddingHorizontal: 6,
    paddingVertical: 4,
    borderRadius: 4,
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    top: 20
  }
})
