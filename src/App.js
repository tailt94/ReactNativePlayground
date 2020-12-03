import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import { Provider } from 'react-redux'
import MainScreen from './containers/MainScreen'
import store from './redux/store'

const App = () => {
  return (
    <Provider store={ store }>
      <StatusBar barStyle="dark-content"/>
      <SafeAreaView>
        <MainScreen/>
      </SafeAreaView>
    </Provider>
  )
}

export default App
