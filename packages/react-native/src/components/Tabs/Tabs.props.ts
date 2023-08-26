import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent
} from 'react-native'

export type Props = {
  children: React.ReactNode
  dataTab: any[]

}

export type IItem = {
  children: React.ReactNode[]
}

export interface IDynamicTabsScreenControllerReturn {
  activeTab: number
  handleTabPress: (index: number) => void
  handleScrollEnd: (event: NativeSyntheticEvent<NativeScrollEvent>) => void
  isIndex: number
  flatListRef: React.RefObject<FlatList<any>>
  width: number
  children: React.ReactNode[]
}

export interface IDynamicTabsProps {
  children: React.ReactNode | undefined
}
