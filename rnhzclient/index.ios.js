import React, { Component } from 'react';
import {
  AppRegistry,
  Alert,
  StyleSheet,
  Text,
  View,
  Websocket
} from 'react-native';

const Horizon = require('./node_modules/horizon-rn-client/src/index.js');
// import Horizon from '@horizon/client';
const horizon = Horizon({/* authType: 'token',*/ host: 'localhost:8181', WebsocketCtor: Websocket  });
// if (!horizon.hasAuthToken()) {
//   horizon.authEndpoint('google').subscribe((endpoint) => {
//     window.location.replace(endpoint);
//   });
// } else {
//   // We have a token already, do authenticated Horizon stuff here
// }
const chat = horizon('messages');

class rnhzclient extends Component {
  constructor(props) {
    super(props);
    horizon.onReady().subscribe(
      () => {
        Alert.alert("Connected to Horizon server")
      }
    )
    chat.fetch().subscribe((messages) => {
      console.log('messages', messages);
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('rnhzclient', () => rnhzclient);
