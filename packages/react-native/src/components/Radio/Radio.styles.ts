import { fontWeights, fontSizes, colors } from '@unifil/tokens'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%'
  },
  radio: {
    width: 24,
    height: 24,
    backgroundColor: colors.white,
    borderRadius: 50,
    marginRight: 8,
    borderColor: colors.grayFourth,
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  containerRadio: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    marginLeft: 0
  },
  textRadio: {
    color: colors.dark,
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.regular
  },
  radioSelected: {
    width: 13,
    height: 13,
    backgroundColor: colors.blueSecondary,
    borderRadius: 50
  }
})
