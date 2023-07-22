import React, { ReactElement } from 'react'

import { FlatList, ScrollView, Text, TouchableOpacity, View } from 'react-native'

import { useDynamicFilterScreenController } from './FilterButton.controller'
import { IItem, Props } from './FilterButton.props'
import { styles } from './FilterButton.styles'

export const FilterButton = (props: Props): ReactElement => {
  const {
    activeFilter,
    handleFilterPress,
    isIndex,
    flatListRef,
    children
  } = useDynamicFilterScreenController(props)

  const renderFilter = ({
    item,
    index
  }: {
    item: IItem
    index: number
  }): ReactElement => (
    <View>
      {item?.children[index]}
    </View>
  )

  return (
    <>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {props?.dataFilter?.map((item: any, index: number) => (
          <>
          {/* {console.log('=======', item)} */}

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
          </>
        ))}
      </ScrollView>
      <FlatList
        data={[
          { key: '0001', children },
          { key: '0002', children },
          { key: '0003', children }
        ]}
        keyExtractor={(item: { key: string, children: React.ReactNode[] }) =>
          item.key
        }
        renderItem={renderFilter}
        showsHorizontalScrollIndicator={false}
        ref={flatListRef}
        pagingEnabled={true}
        contentContainerStyle={styles.flatlist}
        initialScrollIndex={isIndex}
      />
    </>
  )
}
