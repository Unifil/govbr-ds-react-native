 
 
import { StyleSheet } from 'react-native'
import styled from 'styled-components/native'

export const Container = styled.View`
  justify-content: center;
`

export const TabBar = styled.View`  
  justify-content: flex-start;
  align-items: flex-start;
`
export const TextTab = styled.Text`
  font-size: 12px;
  color: #000;
  font-weight: bold;
  line-height: 12px; 
`
export const styles = StyleSheet.create({
  container: { 
    backgroundColor: '#fff'
  },
  tabsContainer: {
    height: 28,
    flexDirection: 'row',
    alignItems: 'center', 
  },
  tabButton: { 
    alignItems: 'center',
    backgroundColor: 'transparent',
    height: 28,
    justifyContent: 'center'
  },
  activeTabButton: {
    backgroundColor: 'transparent', 
    borderBottomColor: '#fff'
  },
  flatlist: { height: '100%', top: 0, alignItems: 'center' }
})
