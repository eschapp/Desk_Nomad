import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native'
import Button from './Button'

const NeedPrivacy = ({_goBack}) => (

      <View style={{flex: 1,
        }}>
        <Button style={{flex: 1, marginBottom: 20}} onPress={_goBack} label='Go Back' />

        <View style={{
          flex: 2,
          backgroundColor: 'powderblue',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Text>Privacy Please</Text>
          <Image
          source={require('./images/door.png')}
          />
        </View>
        <View style={{flex: 2,
          backgroundColor: 'steelblue',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
          }}>

          <Text>Open Format is Fine</Text>

          <Image
          source={require('./images/hierarchical-structure.png')}
          />
          </View>
      </View>
)

export default NeedPrivacy
