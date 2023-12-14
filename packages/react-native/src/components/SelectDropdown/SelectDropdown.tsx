/* eslint-disable no-sequences */
import React, {
  ReactElement,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react'

import { Text, Animated, TouchableOpacity, FlatList, View } from 'react-native'

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
      (Animated as any)
      [animation.type || 'timing'](transition.current, {
        toValue: Number(isExpanded),
        useNativeDriver: true,
        duration: animation.duration || 350
      })
        .start()
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
        style={[
          styles.select,
          {
            zIndex: props.zIndex
          }
        ]}
      >
        <View style={styles.containerText}>
          <Text style={selected ? styles.textDropdown : styles.placeholder}>
            {selected || props?.placeholder}
          </Text>
          {props?.icon && (
            <Animated.View
              style={[
                iconAnimation,
                {
                  marginLeft: 'auto',
                  zIndex: 99
                }
              ]}
            >
              {renderNode(
                props?.icon,
                isExpanded ? props?.expandIcon ?? props?.icon : props?.icon
              )}
            </Animated.View>
          )}
        </View>
        {isExpanded && (
          <View style={styles.content}>
            <Animated.View
              style={[
                styles.dropdown,
                {
                  opacity: transition.current
                }
              ]}
            >
              <FlatList
                nestedScrollEnabled={true}
                ListEmptyComponent={() => (
                  <View style={styles.empty}>
                    {props?.listEmpty && (
                      <Text style={styles.textEmpty}>{props.listEmpty}</Text>
                    )}
                  </View>
                )}
                data={props?.options}
                keyExtractor={(item: any) => item.id.toString()}
                renderItem={({ item }: any) => (
                  <TouchableOpacity
                    style={styles.optionDropdown}
                    onPress={() => {
                      setSelected(item.code)
                      props.onChange(item.id)
                      setIsExpanded(false)
                    }}
                  >
                    <Text style={styles.textDropdown}>{item.code}</Text>
                  </TouchableOpacity>
                )}
              />
            </Animated.View>
          </View>
        )}
      </TouchableOpacity>
    </>
  )
}
