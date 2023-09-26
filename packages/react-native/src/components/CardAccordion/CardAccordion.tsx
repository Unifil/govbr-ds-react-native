/* eslint-disable react/jsx-key */
import React, { useState } from 'react'

import { colors } from '@unifil/tokens'
import { Animated, Text, TouchableOpacity, View } from 'react-native'

import { CardAccordionProps, RneFunctionComponent } from './CardAccordion.props'
import { styles } from './CardAccordion.styles'
import { ListItemContent } from './components/ListContent/ListContent'
import renderNode from './components/RenderNode/RenderNode'
import { normalize } from '../../utils/normalize'
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
  textCheckbox,
  multipleSelection,
  iconCheckbox,
  top,
  bottom,
  right,
  left,
  animation = {
    duration: 350,
    type: 'timing'
  },
  onChange,
  value,
  ...rest
}: any) => {
  const transition = React.useRef(new Animated.Value(0))

  const initialCheckboxState = textCheckbox?.map((_: any, index: any) => value.includes(index))

  const [checkboxStates, setCheckboxStates] = useState(initialCheckboxState)

  const initialSelecteds = textCheckbox?.filter((_: any, index: any) => value.includes(index)) || []

  const [selecteds, setSelecteds] = useState<any>(initialSelecteds)

  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/explicit-function-return-type
  const handleCheckboxChange = (index: any) => {
    setCheckboxStates((prevCheckboxStates: any) => {
      const newCheckboxStates = prevCheckboxStates.map((checkbox: any, i: any) =>
        multipleSelection
          ? i === index
            ? !checkbox
            : checkbox
          : i === index
            ? !checkbox
            : false
      )
      const selectedIndices = newCheckboxStates.map((state: boolean, idx: number) => state ? idx : -1).filter((idx: any) => idx !== -1)

      onChange(selectedIndices)
      return newCheckboxStates
    })

    const item = textCheckbox[index]

    setSelecteds((prevSelectedItems: any) =>
      checkboxStates[index]
        ? prevSelectedItems?.filter((selecteds: any) => selecteds !== item)
        : [...prevSelectedItems, item]
    )
  }

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
    <View style={styles.container}>
      <BaseCard
        {...rest}
        style={{
          backgroundColor: colors.weakGray,
          paddingHorizontal: 15,
          height: 40,
          justifyContent: 'center',
          borderRadius: 4
        }}
      >
        {selecteds.length === 0 ? (
          React.isValidElement(content) ? content : <ListItemContent />
        ) : (
          <View style={styles.containerList}>
            <View
                style={[
                  styles.containerTag,
                  {
                    maxWidth: selecteds.length === 2 ? '68%' : '100%'
                  }
                ]}
              >
                <Text style={styles.textTag}>
                  {
                  selecteds?.length >= 2
                    ? `${selecteds?.[0]?.slice(0, 20)}
                        ${selecteds?.[0]?.length > 20 ? '...' : ''}`
                    : selecteds?.[0]?.slice(0, 32)
                  }
                  {selecteds?.[0]?.length > 32 ? '...' : ''}
                </Text>
              </View>
              {selecteds?.length >= 2 &&
                <View style={styles.containerTag}>
                  <Text style={styles.textTag}>{selecteds?.[1]?.slice(0, 5)}...</Text>
                </View>
              }
          </View>
        )
      }
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
            shadowColor: colors.black,
            shadowOffset: {
              width: 0,
              height: 1
            },
            shadowOpacity: 0.1,
            shadowRadius: 1.0,
            elevation: 3,
            backgroundColor: colors.white,
            position: 'absolute',
            marginTop: normalize(48),
            borderTopWidth: 1,
            borderRightWidth: 1,
            borderLeftWidth: 1,
            borderColor: colors.grayFourth,
            width: '100%'
          }}
        >
          <View>
              {!children ? (
                <>
                  {textCheckbox?.map((item: any, index: any) =>
                    <TouchableOpacity
                      onPress={() => handleCheckboxChange(index)}
                      key={item}
                      style={[
                        styles.containerCheckbox,
                        {
                          backgroundColor: checkboxStates[index] ? colors.blueSecondary : colors.white
                        }
                      ]}
                    >
                      <Text
                        style={[
                          styles.textCheckbox,
                          {
                            color: checkboxStates[index] ? colors.white : colors.gray500
                          }
                        ]}
                      >
                        {item}
                      </Text>
                      <View
                        style={[
                          styles.checkbox,
                          {
                            backgroundColor: checkboxStates[index] ? colors.white : colors.white,
                            borderWidth: checkboxStates[index] ? 2 : 2
                          }
                        ]}
                      >
                        {checkboxStates[index]}
                        <View
                          style={[
                            styles.itemChecked,
                            {
                              backgroundColor: checkboxStates[index] ? colors.blueThird : colors.white
                            }
                          ]}
                        />
                      </View>
                    </TouchableOpacity>
                  )}
                </>
              ) : (
                <>
                  { children }
                </>
              )}
          </View>
        </Animated.View>
      )}
    </View>
  )
}

CardAccordion.displayName = 'ListItem.Accordion'
