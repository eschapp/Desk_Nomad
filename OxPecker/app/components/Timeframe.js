import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native'
import Button from './Button'

const TimeframePicker = ({_goBack}) => (
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
          <Text style={TimeframeStyle}>Today</Text>

        </View>
        <View style={{flex: 2,
          backgroundColor: 'steelblue',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
          }}>

          <Text style={TimeframeStyle}>Tomorrow</Text>

        </View>
      </View>
    )

const TimeframeStyle = {
  color: 'whitesmoke',
  fontSize: 40,
  fontWeight: 'bold'
}

export default TimeframePicker
