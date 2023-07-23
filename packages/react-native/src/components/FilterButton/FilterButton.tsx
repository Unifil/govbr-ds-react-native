import React, { ReactElement, useState } from 'react'

import { ScrollView, Text, TouchableOpacity } from 'react-native'

import { FilterProps } from './FilterButton.props'
import { styles } from './FilterButton.styles'

export const FilterButton = (props: FilterProps): ReactElement => {
  const [activeFilter, setActiveFilter] = useState<number>(0)

  const handleFilterPress = (index: number): void => {
    setActiveFilter(index)
  }

  return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {props?.dataFilter?.map((item: any, index: number) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.filter,
              index === activeFilter && styles.activeFilter
            ]}
            onPress={() => handleFilterPress(index)}
          >
            <Text style={styles.text}>
              {item.textFilter}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
  )
}
