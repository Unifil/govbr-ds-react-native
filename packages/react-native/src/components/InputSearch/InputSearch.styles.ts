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
    borderRadius: 50,
    paddingHorizontal: 10,
    width: '100%',
    backgroundColor: colors.white,
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
    shadowColor: '#00000020',
    shadowOpacity: 1,
    shadowOffset: {
      width: 1,
      height: 1
    }
  },
  input: {
    flex: 1,
    height: 36,
    paddingLeft: 6,
    color: colors.darkBlue,
    fontSize: fontSizes.xs,
    fontWeight: fontWeights.medium
  },
  icon: {
    paddingLeft: 8
  }
})
