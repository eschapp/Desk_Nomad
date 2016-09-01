import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native'


const UserProfile =({_goBack}) => (
  <View style={{flex: 1,
    }}>
    <View style={{
      flex: 2,
      backgroundColor: 'powderblue',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Text>Hello</Text>
      <Text>Here's your profile</Text>
    </View>

    <View style={{flex: 2,
      backgroundColor: 'steelblue',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
      }}>

      <Text>Your Desks</Text>
      <Text>Upcoming, Past, etc</Text>


    </View>
  </View>
)

const LoginStyle = {
  height: 40,
  borderColor: 'whitesmoke',
  borderWidth: 1,
  height: 40,
  margin: 20,
  textAlign: 'center'
}

export default UserProfile
