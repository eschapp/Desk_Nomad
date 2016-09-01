import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native'


const LoginStyle = {
  height: 40,
  borderColor: 'whitesmoke',
  borderWidth: 1,
  height: 40,
  margin: 20,
  textAlign: 'center'
}

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '',
                   email: '',
                   password: ''
      };
  }

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
          <Text>Login</Text>

          <TextInput
            placeholder={'Email'}
            style={LoginStyle}
            onChangeText={(email) => this.setState({email})}
            value={this.state.email}
          />

          <TextInput
            placeholder={'Password'}
            style={LoginStyle}
            onChangeText={(password) => this.setState({password})}
            value={this.state.password}
          />

        </View>
        <View style={{flex: 1,
          backgroundColor: 'steelblue',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
          }}>

          <Text>Register</Text>
          <TextInput
            placeholder={'Name'}
            style={LoginStyle}
            onChangeText={(name) => this.setState({name})}
            value={this.state.name}
          />
          <TextInput
            placeholder={'Email'}
            style={LoginStyle}
            onChangeText={(email) => this.setState({email})}
            value={this.state.email}
          />
          <TextInput
            placeholder={'Password'}
            style={LoginStyle}
            onChangeText={(password) => this.setState({password})}
            value={this.state.password}
          />

          </View>
      </View>


    );
  }

}
