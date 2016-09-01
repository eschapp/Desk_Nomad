import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import Button from './Button'

const route = {
  type: 'push',
  route: {
    key: 'start',
    title: 'start'
  }
}

const Home = ({_handleNavigate}) => (
  <View style={styles.container}>
    <Text style={styles.title}>Rent A Desk</Text>
    <Button onPress={() => _handleNavigate(route)} label='start' />
  </View>
)

const styles = StyleSheet.create({
  title: {
    marginBottom: 20,
    fontSize: 22,
    textAlign: 'center'
  },
  container: {
    paddingTop: 60
  }
})

export default Home
