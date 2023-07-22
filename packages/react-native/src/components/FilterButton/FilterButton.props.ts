import { FlatList } from 'react-native'

export type Props = {
  children: React.ReactNode
  dataFilter: any[]
}

export type IItem = {
  children: React.ReactNode[]
}

export interface IDynamicFilterScreenControllerReturn {
  activeFilter: number
  handleFilterPress: (index: number) => void
  isIndex: number
  flatListRef: React.RefObject<FlatList<any>>
  children: React.ReactNode[]
}

export interface IDynamicFilterProps {
  children: React.ReactNode | undefined
}
