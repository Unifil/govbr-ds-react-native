/* eslint-disable react/jsx-key */
import React, { useState } from 'react'

import { colors } from '@unifil/tokens'
import { Animated, Text, TouchableOpacity, View } from 'react-native'

import { CardAccordionProps, RneFunctionComponent } from './CardAccordion.props'
import { styles } from './CardAccordion.styles'
import { ListItemContent } from './components/ListContent/ListContent'
import renderNode from './components/RenderNode/RenderNode'
import IconCheck from '../../../assets/icons/check.svg'
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
  subtitle,
  textCheckbox,
  multipleSelection,
  animation = {
    duration: 350,
    type: 'timing'
  },
  ...rest
}: any) => {
  const transition = React.useRef(new Animated.Value(0))

  const initialCheckboxState = textCheckbox?.map(() => false)
  const [checkboxStates, setCheckboxStates] = useState(initialCheckboxState)

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
      return newCheckboxStates
    })
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
    <>
      <BaseCard {...rest} style={{
        shadowColor: colors.black,
        shadowOffset: {
          width: 0,
          height: 1
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        marginBottom: 10,
        backgroundColor: backgroundColor || colors.white,
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
            shadowColor: colors.black,
            shadowOffset: {
              width: 0,
              height: 1
            },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,
            elevation: 3,
            marginBottom: 10,
            backgroundColor: colors.white,
            paddingVertical: 15,
            paddingHorizontal: 20,
            borderRadius: 10
          }}
        >
          <View>
            <Text style={styles.subtitle}>
              {subtitle}
            </Text>
              {!children ? (
                <>
                  {textCheckbox?.map((item: any, index: any) =>
                    <TouchableOpacity
                      onPress={() => handleCheckboxChange(index)}
                      style={styles.containerCheckbox}
                      key={item}
                    >
                      <View
                        style={[
                          styles.checkbox,
                          {
                            backgroundColor: checkboxStates[index] ? colors.darkBlue : colors.white,
                            borderWidth: checkboxStates[index] ? 0 : 2
                          }
                        ]}
                      >
                        {checkboxStates[index] && <IconCheck />}
                      </View>
                      <Text
                        style={[
                          styles.textCheckbox,
                          {
                            color: checkboxStates[index] ? colors.darkBlue : colors.gray500
                          }
                        ]}
                      >
                        {item}
                      </Text>
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
    </>
  )
}

CardAccordion.displayName = 'ListItem.Accordion'
