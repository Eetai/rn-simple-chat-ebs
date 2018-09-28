import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import ConnectedChatLog from './Containers/ConnectedChatLog'
import SimpleChatApp from './Reducers'
import SimpleChatSaga from './Sagas'
import ConnectedAddMessage from './Containers/ConnectedAddMessage'
import { createStackNavigator } from 'react-navigation';
import Userpage from './Components/UserPage'
import ChatLog from './Components/ChatLog';

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  SimpleChatApp,
  applyMiddleware(sagaMiddleware),
)

sagaMiddleware.run(SimpleChatSaga)

class App extends React.Component {
  render() {
    console.log(this.props)
    return (
      <Provider store={store}>
        <View style={styles.container}>
           <ConnectedChatLog navigation={this.props.navigation} />
           <ConnectedAddMessage />
         </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    top: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})


export default createStackNavigator(
  {
    App: {screen: App},
    Userpage: {screen: Userpage},
  }
)
