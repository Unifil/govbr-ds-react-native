import { colors, fontSizes } from '@unifil/tokens'
import { StyleSheet } from 'react-native'

import { normalize } from '../../utils/normalize'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  containerRow: {
    width: normalize(260)
  },
  progressBarBackground: {
    backgroundColor: colors.blue,
    opacity: 0.2,
    height: 6,
    width: '90%',
    borderRadius: 8
  },
  progressBar: {
    backgroundColor: colors.blueSecondary,
    height: 6,
    borderRadius: 8,
    width: '90%'
  },
  ContainerProgressBar: {
    width: '90%',
    justifyContent: 'flex-start',
    position: 'absolute'
  },
  text: {
    color: colors.blueSecondary,
    fontFamily: 'Rawline-Black',
    fontSize: fontSizes.sm,
    marginBottom: normalize(3)
  },
  textTitle: {
    color: colors.black,
    fontFamily: 'Rawline-Black',
    fontSize: fontSizes.sm,
    marginBottom: normalize(3)
  },
  content: {
    justifyContent: 'space-between',
    width: '100%',
    elevation: 10,
    shadowColor: '#00000040',
    shadowOffset: {
      width: 0,
      height: normalize(4)
    },
    shadowOpacity: 1,
    shadowRadius: 0,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    backgroundColor: colors.white,
    padding: normalize(16),
    borderRadius: 8

  },
  contentText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  textGray: {
    color: colors.dark,
    fontFamily: 'Rawline-Regular',
    fontSize: fontSizes.sm
  }
})
