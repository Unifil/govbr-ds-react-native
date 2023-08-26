/* eslint-disable no-sequences */
import React, { ReactElement, useEffect, useMemo, useRef, useState } from 'react'

import { Text, Animated, TouchableOpacity } from 'react-native'

import renderNode from './RenderNode/RenderNode'
import { SelectProps } from './SelectDropdown.props'
import { styles } from './SelectDropdown.styles'

export const SelectDropdown = (props: SelectProps): ReactElement => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [selected, setSelected] = useState('')
  const transition = useRef(new Animated.Value(0))
  const animation = { duration: 350, type: 'timing' }

  const startAnimation = React.useCallback(() => {
    if (typeof animation !== 'boolean') {
      (Animated as any)[animation.type || 'timing'](transition.current, {
        toValue: Number(isExpanded),
        useNativeDriver: true,
        duration: animation.duration || 350
      }).start()
    }
  }, [isExpanded, animation])

  useEffect(() => {
    startAnimation()
  }, [isExpanded, startAnimation])

  const iconAnimation = useMemo(
    () => ({
      transform: [
        {
          rotate: props?.noRotation
            ? '0deg'
            : transition.current.interpolate({
              inputRange: [0, 1],
              outputRange: ['0deg', props?.leftRotate ? '180deg' : '-180deg']
            })
        }
      ]
    }),
    [props?.leftRotate, props?.noRotation]
  )

  return (
    <>
    <TouchableOpacity
      onPress={() => setIsExpanded(!isExpanded ?? false)}
      style={styles.select}
    >
       <Text style={selected ? styles.textDropdown : styles.placeholder}>
         {selected || props?.placeholder}
       </Text>
       {props?.icon && (
          <Animated.View
            style={[iconAnimation, { marginLeft: 'auto' }]}
          >
            {renderNode(props?.icon, isExpanded ? props?.expandIcon ?? props?.icon : props?.icon)}
          </Animated.View>
       )}
    </TouchableOpacity>
      {isExpanded &&
        <Animated.ScrollView
          style={[
            styles.dropdown,
            {
              opacity: transition.current,
              top: props?.positionTop,
              right: props?.positionRight,
              left: props?.positionLeft,
              bottom: props?.positionBottom
            }
          ]}
        >
          {props?.options?.map((item: string) =>
            <TouchableOpacity
              key={item}
              style={styles.optionDropdown}
              onPress={() => (setSelected(item), setIsExpanded(false))}
            >
              <Text style={styles.textDropdown} >
                {item}
              </Text>
            </TouchableOpacity>
          )}
        </Animated.ScrollView>
      }
    </>
  )
}
