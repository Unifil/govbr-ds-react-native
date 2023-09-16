import React, { useRef, useState } from 'react'

import {
  Dimensions,
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent
} from 'react-native'

import {
  IDynamicTabsProps,
  IDynamicTabsScreenControllerReturn
} from './Tabs.props'

export const useDynamicTabsScreenController = (
  props: IDynamicTabsProps
): IDynamicTabsScreenControllerReturn => {
  const [activeTab, setActiveTab] = useState<number>(0)
  const [isIndex, setIndex] = useState<number>(0)
  const flatListRef = useRef<FlatList>(null)

  const { width } = Dimensions.get('window')

  const handleTabPress = (index: number): void => {
    flatListRef?.current?.scrollToIndex({ index, animated: true })
    setIndex(index)
    setActiveTab(index)
  }

  const children = React.Children.toArray(props.children)

  const handleScrollEnd = (
    event: NativeSyntheticEvent<NativeScrollEvent>
  ): void => {
    const offset = event.nativeEvent.contentOffset.x
    const index = Math.round(offset / width)
    setActiveTab(index)
  }

  return {
    activeTab,
    handleTabPress,
    handleScrollEnd,
    isIndex,
    flatListRef,
    width,
    children
  }
}
