import React, { ReactElement } from 'react'

import { colors } from '@unifil/tokens'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'

import { useDynamicTabsScreenController } from './Tabs.controller'
import { IItem, Props } from './Tabs.props'
import { styles } from './Tabs.styles'

export const Tabs = (props: Props): ReactElement => {
  const {
    activeTab,
    handleTabPress,
    handleScrollEnd,
    isIndex,
    flatListRef,
    width,
    children
  } = useDynamicTabsScreenController(props)

  const renderTab = ({
    item,
    index
  }: {
    item: IItem
    index: number
  }): ReactElement => (
    <View
      style={{
        width
      }}
    >
      {item?.children[index]}
    </View>
  )

  return (
    <>
      <View style={styles.containerTabs} >
        {props?.dataTab?.map((item: any, index: number) => (
          <TouchableOpacity
            key={item.name}
            style={[
              styles.tabButton,
              index === activeTab && styles.activeTabButton
            ]}
            onPress={() => handleTabPress(index)}
          >
            <View style={styles.tab}>
              {index !== activeTab && item?.icon}
              {index === activeTab && item?.iconActive}
                <Text
                  style={[
                    styles.textTabs,
                    {
                      color: activeTab === index ? colors.blueSecondary : colors.dark
                    }
                  ]}
                >
                  {item.name}
                </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
      <FlatList
        data={[
          { key: '1', children },
          { key: '2', children }
        ]}
        renderItem={renderTab}
        keyExtractor={(item: { key: string, children: React.ReactNode[] }) =>
          item.key
        }
        horizontal
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleScrollEnd}
        ref={flatListRef}
        bounces={false}
        pagingEnabled={true}
        contentContainerStyle={styles.flatlist}
        initialScrollIndex={isIndex}
        getItemLayout={(_, index) => ({
          length: width,
          offset: width * index,
          index
        })}
      />
    </>
  )
}
