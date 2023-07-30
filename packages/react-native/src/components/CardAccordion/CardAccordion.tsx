import React from 'react'

import { Animated } from 'react-native'

import { CardAccordionProps, RneFunctionComponent } from './CardAccordion.props'
import { ListItemContent } from './components/ListContent/ListContent'
import renderNode from './components/RenderNode/RenderNode'
import { BaseCard } from '../BaseCard/BaseCard'

export const CardAccordion: RneFunctionComponent<
CardAccordionProps
> = ({
  children,
  isExpanded = false,
  icon,
  backgroundColor,
  expandIcon,
  content,
  leftRotate = false,
  noRotation,
  noIcon,
  animation = {
    duration: 350,
    type: 'timing'
  },
  ...rest
}: any) => {
  const transition = React.useRef(new Animated.Value(0))

  const startAnimation = React.useCallback(() => {
    if (typeof animation !== 'boolean') {
      (Animated as any)[animation.type || 'timing'](transition.current, {
        toValue: Number(isExpanded),
        useNativeDriver: true,
        duration: animation.duration || 350
      }).start()
    }
  }, [isExpanded, animation])

  React.useEffect(() => {
    startAnimation()
  }, [isExpanded, startAnimation])

  const iconAnimation = React.useMemo(
    () => ({
      transform: [
        {
          rotate: noRotation
            ? '0deg'
            : transition.current.interpolate({
              inputRange: [0, 1],
              outputRange: ['0deg', leftRotate ? '180deg' : '-180deg']
            })
        }
      ]
    }),
    [leftRotate, noRotation]
  )

  return (
    < >
      <BaseCard {...rest} style={{
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        marginBottom: 10,
        backgroundColor: backgroundColor || '#fff',
        padding: 10,
        borderRadius: 10
      }}>
        {React.isValidElement(content) ? content : <ListItemContent />}
        {!noIcon && (
          <Animated.View
            style={[iconAnimation, { marginLeft: 'auto' }]}
          >
            {renderNode(icon, isExpanded ? expandIcon ?? icon : icon)}
          </Animated.View>
        )}
      </BaseCard>
      {isExpanded && (
        <Animated.View
          style={{
            opacity: transition.current,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 1
            },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,
            elevation: 3,
            marginBottom: 10,
            backgroundColor: '#fff',
            padding: 10,
            borderRadius: 10
          }}
        >
          {children}
        </Animated.View>
      )}
    </ >
  )
}

CardAccordion.displayName = 'ListItem.Accordion'
