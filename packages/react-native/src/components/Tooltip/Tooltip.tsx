import React, { ReactElement, useState } from 'react'

import { Text, TouchableOpacity, View } from 'react-native'

import { TooltipProps } from './Tooltip.props'
import { styles } from './Tooltip.styles'

export const Tooltip = (props: TooltipProps): ReactElement => {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) {
    return (
      <></>
    )
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  function renderArrow() {
    switch (props?.positionArrow) {
      case 'topLeft':
        return arrowTopLeft()
      case 'topRight':
        return arrowTopRight()
      case 'bottomLeft':
        return arrowBottomLeft()
      case 'bottomRight':
        return arrowBottomRight()
    }
  }

  return (
    <View style={styles.containerScreen}>
      <View
        style={[
          styles.containerTooltip
          // {
          //   top: props?.top,
          //   bottom: props?.bottom,
          //   right: props?.right,
          //   left: props?.left
          // }
        ]}
      >
        {renderArrow()}
        <View style={styles.containerTitle}>
          <Text style={styles.title}>{props?.title ? props?.title : 'Dica'}</Text>
          <TouchableOpacity onPress={() => setIsVisible(false)}>
            <View>{props?.iconClose}</View>
          </TouchableOpacity>
        </View>
        <Text style={styles.text}>{props?.text}</Text>
      </View>
    </View>
  )
}

const arrowTopLeft = (): ReactElement => {
  return <View style={styles.arrow} />
}

const arrowTopRight = (): ReactElement => {
  return <View
    style={[
      styles.arrow,
      {
        top: -18,
        left: 190
      }
    ]}
  />
}

const arrowBottomLeft = (): ReactElement => {
  return <View
    style={[
      styles.arrow,
      {
        top: 100,
        left: 20,
        transform: [{ rotate: '180deg' }]
      }
    ]}
  />
}

const arrowBottomRight = (): ReactElement => {
  return <View
    style={[
      styles.arrow,
      {
        top: 100,
        left: 190,
        transform: [{ rotate: '180deg' }]
      }
    ]}
  />
}
