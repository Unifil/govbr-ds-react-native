import { Dimensions, Platform, PixelRatio } from 'react-native'

export const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window')

const wscale = SCREEN_WIDTH / 375
const hscale = SCREEN_HEIGHT / 667
export function normalize (size: number, isBasedHeight = false): number {
  const newSize = isBasedHeight ? size * hscale : size * wscale
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize))
  }
  return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 1
}
