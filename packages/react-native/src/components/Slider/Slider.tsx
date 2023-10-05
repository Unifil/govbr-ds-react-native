import * as React from 'react'

import {
  StyleSheet,
  FlatList,
  View,
  TouchableOpacity,
  Platform,
  SafeAreaView,
  I18nManager,
  Dimensions
} from 'react-native'

import { Button } from '../Button/Button'

const isAndroidRTL = I18nManager.isRTL && Platform.OS === 'android'
const { width } = Dimensions.get('window')
export const Slider = ({
  data,
  renderItem,
  renderNextButton = () => { },
  renderDoneButton = () => { },
  renderPrevButton = () => { },
  onSlideToIndex = () => { },
  onSlideChange = () => { },
  onSkip = () => { },
  onDone = () => { },
  renderPagination,
  activeDotStyle,
  dotStyle,
  dotClickEnabled,
  skipLabel,
  doneLabel,
  nextLabel,
  prevLabel,
  showDoneButton,
  showNextButton,
  showPrevButton,
  showSkipButton,
  bottomButton,
  ...props
}: any): React.ReactElement => {
  const [dimensions, setDimensions] = React.useState({ width: 0, height: 0 })
  const [activeIndex, setActiveIndex] = React.useState(0)
  const flatListRef = React.useRef(null) as any

  const goToSlide = (pageNum: any, triggerOnSlideChange = false): any => {
    console.log('goToSlide', pageNum)
    const prevNum = activeIndex
    setActiveIndex(pageNum)
    flatListRef.current?.scrollToOffset({
      offset: _rtlSafeIndex(pageNum) * dimensions.width
    })
    if (triggerOnSlideChange) {
      onSlideToIndex && onSlideToIndex(pageNum)
      console.log('sdfsdfsdfsdfsdfsd', pageNum)
      onSlideChange(pageNum, prevNum)
    }
  }

  const _rtlSafeIndex = (i: number): any =>
    isAndroidRTL ? data.length - 1 - i : i

  const _renderItem = (flatListArgs: any): any => {
    const props = { ...flatListArgs, dimensions }
    return <View style={{ width: dimensions.width, flex: 1 }}>{renderItem(props)}</View>
  }

  const _renderPagination = (): any => {
    return (
      <View style={styles.paginationContainer}>
        <SafeAreaView>
          <View style={styles.paginationDots}>
            {data.length === activeIndex + 1 ? (
              <Button
                text=' Ir para o app'
                type='primary'
                onPress={onDone}
              />

            ) : (
              data.length > 1 &&
              data.map((_: any, i: any) =>
                dotClickEnabled ? (
                  <TouchableOpacity
                    key={i}
                    style={[
                      styles.dot,
                      _rtlSafeIndex(i) === activeIndex ? activeDotStyle : dotStyle
                    ]}
                    onPress={() => goToSlide(i, true)}
                  />
                ) : (
                  <View
                    key={i}
                    style={[
                      styles.dot,
                      _rtlSafeIndex(i) === activeIndex ? activeDotStyle : dotStyle
                    ]}
                  />
                )
              )
            )}
          </View>
        </SafeAreaView>
      </View>
    )
  }

  const _onMomentumScrollEnd = (e: any): any => {
    const offset = e.nativeEvent.contentOffset.x
    const newIndex = _rtlSafeIndex(Math.round(offset / dimensions.width))
    if (newIndex === activeIndex) {
      return
    }
    const lastIndex = activeIndex
    setActiveIndex(newIndex)
    onSlideToIndex && onSlideToIndex(newIndex)
    onSlideChange && onSlideChange(newIndex, lastIndex)
    console.log('onSlideChssange', newIndex)
  }

  const _onLayout = (event: any): any => {
    const { width, height } = event.nativeEvent.layout
    setDimensions({ width, height })
  }

  return (
    <View style={styles.flexOne}>
      <FlatList
        ref={flatListRef}
        data={data}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        bounces={false}
        style={styles.flatList}
        renderItem={_renderItem}
        onMomentumScrollEnd={_onMomentumScrollEnd}
        onLayout={_onLayout}
        initialNumToRender={data.length}
        {...props}
      />
      {renderPagination ? renderPagination(activeIndex) : _renderPagination()}
    </View>
  )
}

const styles = StyleSheet.create({
  flexOne: {
    flex: 1
  },
  flatList: {
    flex: 1,
    flexDirection: isAndroidRTL ? 'row-reverse' : 'row',
    width
  },
  paginationContainer: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
    justifyContent: 'center'
  },
  paginationDots: {
    height: 16,
    margin: 16,
    flexDirection: isAndroidRTL ? 'row-reverse' : 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 4,
    borderWidth: 1,
    borderColor: '#1351B4'
  },
  leftButtonContainer: {
    position: 'absolute',
    left: 0
  },
  rightButtonContainer: {
    position: 'absolute',
    right: 0
  },
  bottomButton: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, .3)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  transparentBottomButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    padding: 12
  }
})
