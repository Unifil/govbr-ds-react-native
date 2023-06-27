declare module '*.svg' {
  import React from 'react'

  import { SvgProps } from 'react-native-svg'
  const content: React.FC<SvgProps>
  export default content
}

declare module '*.png' {
  import React from 'react'

  import { ImageProps } from 'react-native'
  const content: React.FC<ImageProps>
  export default content
}

declare module 'react-native-version-check-expo';
