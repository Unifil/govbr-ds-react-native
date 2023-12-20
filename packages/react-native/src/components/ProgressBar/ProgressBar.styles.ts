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
    width: normalize(285)
  },
  progressBarBackground: {
    backgroundColor: colors.blue,
    opacity: 0.2,
    height: 6,
    width: '100%',
    borderRadius: 8
  },
  progressBar: {
    backgroundColor: colors.blueSecondary,
    height: 6,
    borderRadius: 8,
    width: '100%'
  },
  ContainerProgressBar: {
    width: '100%',
    justifyContent: 'flex-start',
    position: 'absolute'
  },
  text: {
    color: colors.blueSecondary,
    fontFamily: 'Rawline-Black',
    fontSize: fontSizes.sm,
    marginBottom: normalize(3)
  }
})
