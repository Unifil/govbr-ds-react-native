 import styled from 'styled-components/native' 
import { InitialScreen } from './src'

export const Container = styled.View`
  flex: 1;
  background-color: blue;
  justify-content: center;
  align-items: center;
`

function App() {
  return (
   <InitialScreen />
 
  )
}

let AppEntryPoint = App

 
  // AppEntryPoint = require('./.storybook').default
 

export default AppEntryPoint
