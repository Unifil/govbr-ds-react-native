import { fontWeights, fontSizes, colors, radii } from '@unifil/tokens'
import { StyleSheet } from 'react-native'

import { normalize } from '../../utils/normalize'

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
    fontFamily: 'Rawline-Bold',
    textTransform: 'capitalize'
  },
  description: {
    color: colors.gray600,
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.regular,
    fontFamily: 'Rawline-Regular',
    marginTop: normalize(6)
  },
  containerRow: {
    flexDirection: 'row',
    alignItems: 'center'
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
    paddingHorizontal: normalize(15),
    paddingVertical: normalize(10),
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
  shortName: {
    fontSize: fontSizes.sm,
    fontFamily: 'Rawline-Bold',
    color: 'white'
  },
  containerShortName: {
    marginRight: normalize(12),
    backgroundColor: '#168821',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
