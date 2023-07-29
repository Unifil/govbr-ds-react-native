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
    <View>
      <View style={styles.container} >
        {!props.search ? <View style={styles.containerView} >
        {props?.dataTab?.map((item: any, index: number) => (
          <TouchableOpacity
            key={item.name}
            style={[
              styles.tabButton,
              index === activeTab && styles.activeTabButton
            ]}
            onPress={() => handleTabPress(index)}
          >
            <View style={styles.containerTab}>

              <Text
                style={[
                  styles.textTabs,
                  {
                    color: activeTab === index ? colors.darkBlue : colors.gray200,
                    marginLeft: index === 0 ? props.marginTitleTab : 0
                  }
                ]}
              >
                {item.name}
              </Text>
              {item.count &&
                <View
                style={[
                  styles.countTabs,
                  {
                    backgroundColor: activeTab === index ? colors.darkBlue : colors.gray200
                  }
                ]}
              >
                  <Text style={styles.textCount}>
                    {item.count}
                  </Text>
                </View>}
              {index === 0 ? <View style={styles.pipe} /> : '' || props?.dataTab?.length === index + 1 ? '' : <View style={styles.pipe} />}
            </View>
          </TouchableOpacity>
        ))}
        </View>
          : <View
          style={{
            marginLeft: props.marginTitleTab,
            width: '80%'
          }}
          >
          {props.inputSearch}

          </View>
        }
        <View style={{
          marginRight: props.marginTitleTab
        }}>

      {props.iconLeft}

    </View>

      </View>
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
