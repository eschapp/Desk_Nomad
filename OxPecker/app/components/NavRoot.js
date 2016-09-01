import React, { Component } from 'react'
import Home from '../components/Home'
import About from '../components/About'
import TimeframePicker from '../components/Timeframe'
import NeedPrivacy from '../components/NeedPrivacy'
import NeedWifi from '../components/NeedWifi'
import Listings from '../components/Listings'
import StartPage from '../components/StartPage'
import PaymentInfo from '../components/PaymentInfo'
import UserProfile from '../components/UserProfile'
import Login from '../components/Login'

import {
  BackAndroid,
  NavigationExperimental
} from 'react-native'

const {
  CardStack: NavigationCardStack
} = NavigationExperimental

class NavRoot extends Component {
  constructor (props) {
    super(props)
    this._renderScene = this._renderScene.bind(this)
    this._handleBackAction = this._handleBackAction.bind(this)
  }
  componentDidMount () {
    BackAndroid.addEventListener('hardwareBackPress', this._handleBackAction)
  }
  componentWillUnmount () {
    BackAndroid.removeEventListener('hardwareBackPress', this._handleBackAction)
  }
  _renderScene (props) {
    const { route } = props.scene
    if (route.key === 'home') {
     return <Home
              _handleNavigate={this._handleNavigate.bind(this)} />
    }
    if (route.key === 'timeframe') {
      return <TimeframePicker _goBack={this._handleBackAction.bind(this)} _handleNavigate={this._handleNavigate.bind(this)}  />
    }
    if (route.key === 'about') {
     return <About _goBack={this._handleBackAction.bind(this)} />
    }
    if (route.key === 'privacy') {
      return <NeedPrivacy _goBack={this._handleBackAction.bind(this)} _handleNavigate={this._handleNavigate.bind(this)} />
    }
    if (route.key === 'wifi') {
      return <NeedWifi _goBack={this._handleBackAction.bind(this)} />
    }
    if (route.key === 'listings') {
      return <Listings _goBack={this._handleBackAction.bind(this)} />
    }
    if (route.key === 'payment') {
      return <PaymentInfo _goBack={this._handleBackAction.bind(this)} />
    }
    if (route.key === 'start') {
      return <StartPage _goBack={this._handleBackAction.bind(this)} _handleNavigate={this._handleNavigate.bind(this)} />
    }
    if (route.key === 'profile') {
      return <UserProfile _goBack={this._handleBackAction.bind(this)} />
    }
    if (route.key === 'login') {
      return <Login _goBack={this._handleBackAction.bind(this)} />
    }
  }
  _handleBackAction () {
    if (this.props.navigation.index === 0) {
      return false
    }
    this.props.popRoute()
    return true
  }
  _handleNavigate (action) {
    switch (action && action.type) {
      case 'push':
        this.props.pushRoute(action.route)
        return true
      case 'back':
      case 'pop':
        return this._handleBackAction()
      default:
        return false
    }
  }
  render () {
    return (
      <NavigationCardStack
        direction='vertical'
        navigationState={this.props.navigation}
        onNavigate={this._handleNavigate.bind(this)}
        renderScene={this._renderScene} />
      )
   }
}

export default NavRoot
