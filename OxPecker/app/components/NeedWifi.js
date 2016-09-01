import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native'

export default class NeedWifi extends React.Component {

  render() {
    return (

      <View style={{flex: 1,
        }}>
        <View style={{
          flex: 1,
          backgroundColor: 'powderblue',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Text>Wifi Needed</Text>
          <Image
          source={require('./images/wifi.png')}
          />
        </View>
        <View style={{flex: 1,
          backgroundColor: 'steelblue',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
          }}>

          <Text>I'll bring my own Wifi</Text>

          <Image
          source={require('./images/nowifi.png')}
          />
          </View>
      </View>


    );
  }

}
