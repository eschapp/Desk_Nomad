import React, { Component } from 'react';
import {
  AppRegistry,
  Alert,
  StyleSheet,
  Text,
  View,
  Websocket
} from 'react-native';
import configureStore from './app/store/configureStore'
const store = configureStore()

import TabsRootContainer from './app/containers/tabsRootContainer'
import { Provider } from 'react-redux'

// const Horizon = require('./node_modules/horizon-rn-client/src/index.js');
// // import Horizon from '@horizon/client';
// const horizon = Horizon({/* authType: 'token',*/ host: 'localhost:8181', WebsocketCtor: Websocket  });
// // if (!horizon.hasAuthToken()) {
// //   horizon.authEndpoint('google').subscribe((endpoint) => {
// //     window.location.replace(endpoint);
// //   });
// // } else {
// //   // We have a token already, do authenticated Horizon stuff here
// // }
// const chat = horizon('messages');

const OxPecker = () => (
  // constructor(props) {
  //   super(props);
  //   horizon.onReady().subscribe(
  //     () => {
  //       Alert.alert("Connected to Horizon server")
  //     }
  //   )
  //   chat.fetch().subscribe((messages) => {
  //     console.log('messages', messages);
  //   });
  // }

  <Provider store={store}>
    <TabsRootContainer />
  </Provider>
)

AppRegistry.registerComponent('OxPecker', () => OxPecker);
