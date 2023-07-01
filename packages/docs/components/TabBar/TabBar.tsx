import React, { ReactElement } from 'react'

import { View, FlatList, TouchableOpacity } from 'react-native'

import { useDynamicTabsScreenController } from './TabBar.controller'
import { IItem, Props } from './TabBar.props'
import { Container, styles, TabBar, TextTab } from './TabBar.styles'

const DynamicTabsScreen = (props: Props): ReactElement => {
  const {
    title,
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
    <Container
      style={{
        width
      }}
    >
      {item?.children[index]}
    </Container>
  )

  return (
    <View style={styles.container}>
      <TabBar 
        style={styles.tabsContainer}
      >
        {title.map((tab: string, index: number) => (
          <TouchableOpacity
            key={tab}
            style={[
              styles.tabButton,
              index === activeTab && styles.activeTabButton
            ]}
            onPress={() => handleTabPress(index)}
          >
            <TextTab>{tab} {index === 0 ? "|" : "" || title.length === index + 1 ? "" : "|"}</TextTab>
          </TouchableOpacity>
        ))}
      </TabBar>
      <FlatList
        data={[
          { key: '0001', children },
          { key: '0002', children }
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
    </View>
  )
}

export default DynamicTabsScreen
