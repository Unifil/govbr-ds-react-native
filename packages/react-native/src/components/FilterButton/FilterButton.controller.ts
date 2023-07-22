import React, { useRef, useState } from 'react'

import { FlatList } from 'react-native'

import {
  IDynamicFilterProps,
  IDynamicFilterScreenControllerReturn
} from './FilterButton.props'

export const useDynamicFilterScreenController = (
  props: IDynamicFilterProps
): IDynamicFilterScreenControllerReturn => {
  const [activeFilter, setActiveFilter] = useState<number>(0)
  const [isIndex, setIndex] = useState<number>(0)
  const flatListRef = useRef<FlatList>(null)

  const handleFilterPress = (index: number): void => {
    setActiveFilter(index)
    flatListRef?.current?.scrollToIndex({ index, animated: false })
    setIndex(index)
  }

  const children = React.Children.toArray(props.children)

  return {
    activeFilter,
    handleFilterPress,
    isIndex,
    flatListRef,
    children
  }
}
