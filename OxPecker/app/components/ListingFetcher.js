import React, { Component } from 'react';
import { Image, MapView, View, Text  } from 'react-native';
import Button from 'react-native-button'
export default class ListingFetcher extends Component {
  constructor(props, context) {
  super(props, context);
    }
  _handlePress() {
    console.log('Pressed!');
    }

  render() {
    return (

      <View  style={{
        flex: 1,
        backgroundColor: 'powderblue',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <View style={{
          flex: 1,
          backgroundColor: 'steelblue',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 10
        }}>
          <Text> This is a Listing </Text>
          <Image
          source={require('./images/interviewroom.png')}
          />
          <Text>Address</Text>
          <MapView
            style={{height: 100, margin: 0}}
            showsUserLocation={true}
            region={{
              latitude: 39.06,
              longitude: -95.22,
              }}
            />
          <Text>Ammenities</Text>
          <Text>Price</Text>

          <Button
           style={{fontSize: 20, color: 'green', backgroundColor: 'whitesmoke', marginBottom: 10}}
           styleDisabled={{color: 'red'}}
           onPress={() => this._handlePress()}>
           Book this Chair!
         </Button>
        </View>
      </View>

    )
  }
}
