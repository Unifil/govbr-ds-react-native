import { colors, fontSizes, radii } from '@unifil/tokens'
import { StyleSheet } from 'react-native'

import { normalize } from '../../utils/normalize'

export const styles = StyleSheet.create({
  containerCard: {
    width: '100%',
    paddingHorizontal: normalize(15),
    paddingVertical: normalize(10),
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
  row: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center'
  },
  containerDate: {
    backgroundColor: '#EDF5FF',
    paddingHorizontal: normalize(8),
    paddingVertical: normalize(4),
    borderRadius: 4
  },
  textDate: {
    fontSize: fontSizes.sm,
    fontFamily: 'Rawline-Bold',
    color: colors.blue
  },
  containerStatus: {
    backgroundColor: colors.gray300,
    paddingHorizontal: normalize(8),
    paddingVertical: normalize(4),
    borderRadius: 4,
    marginLeft: normalize(8),
    opacity: 0.8
  },
  textStatus: {
    fontSize: fontSizes.sm,
    fontFamily: 'Rawline-Bold',
    color: colors.white
  },
  textComment: {
    fontSize: fontSizes.sm,
    fontFamily: 'Rawline-Regular',
    color: colors.gray400,
    marginTop: normalize(8),
    textAlign: 'justify'
  },
  containerButtons: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  button: {
    borderRadius: 25,
    backgroundColor: colors.gray200,
    justifyContent: 'center',
    alignItems: 'center',
    width: normalize(64),
    height: normalize(32),
    marginLeft: normalize(8),
    marginTop: normalize(16)
  }
})
