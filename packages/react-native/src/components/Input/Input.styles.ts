import {
  fontWeights,
  fontSizes,
  colors
} from '@unifil/tokens'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 4,
    paddingHorizontal: 10,
    width: '100%',
    backgroundColor: '#F8F8F8',
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0

  },
  input: {
    flex: 1,
    height: 36,
    paddingLeft: 6,
    color: colors.dark,
    fontSize: fontSizes.xs,
    fontWeight: fontWeights.medium
  },
  icon: {
    paddingLeft: 8
  },
  label: {
    color: colors.gray600,
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.bold,
    fontFamily: 'Rawline-Bold',
    marginBottom: 8,
    marginTop: 24
  },
  errorText: {
    color: colors.orange,
    fontSize: 14,
    marginTop: 5,
    fontFamily: 'Rawline-Regular'
  }
})
