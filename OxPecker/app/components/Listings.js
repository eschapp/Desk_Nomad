import React, { Component } from 'react';
import { MapView, View, Text, ScrollView } from 'react-native';

import ListingFetcher from './ListingFetcher.js'

export default class Listings extends Component {


  render() {
    return (
      <ScrollView>
        <Text>This is where the listings will go:</Text>
        <ListingFetcher />
        <ListingFetcher />
        <ListingFetcher />
        <ListingFetcher />
        <ListingFetcher />
        <ListingFetcher />
        <ListingFetcher />
        <ListingFetcher />
        <ListingFetcher />

      </ScrollView>
    )
  }
}
