import { fontWeights, fontSizes, colors } from '@unifil/tokens'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  subtitle: {
    color: colors.grayThird,
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.medium,
    marginBottom: 15
  },
  checkbox: {
    width: 18,
    height: 18,
    backgroundColor: colors.darkBlue,
    borderRadius: 6,
    marginRight: 10,
    borderColor: colors.grayFourth,
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  containerCheckbox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14
  },
  textCheckbox: {
    color: colors.darkBlue,
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.medium
  }
})
