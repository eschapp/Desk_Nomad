import React, { Component, PropTypes } from 'react'
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Image
} from 'react-native'
import Button from './Button'

const route = {
  type: 'push',
  route: {
    key: 'timeframe',
    title: 'timeframe'
  }
}

const StartPage = ({_handleNavigate, _goBack}) => (

      <View style={{flex: 1}}>
        <Button style={{flex: 1, marginBottom: 20}} onPress={_goBack} label='Go Back' />
        <TouchableHighlight  onPress={() => _handleNavigate(route)} >

          <View style={{
            flex: 2,
            backgroundColor: 'powderblue',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Text>Rent a desk</Text>
            <Image
            source={require('./images/interviewroom.png')}
            />
          </View>
        </TouchableHighlight>

        <View style={{flex: 2,
          backgroundColor: 'steelblue',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
          }}>

          <Text>Host A Coworker</Text>

          <Image
          source={require('./images/deskforrent.png')}
          />
          </View>
      </View>
)

export default StartPage
