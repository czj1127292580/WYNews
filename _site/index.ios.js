/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import WYMain from './Component/WYMain'

export default class WYNews extends Component {
  render() {
    return (
      <WYMain />
    );
  }
}

AppRegistry.registerComponent('WYNews', () => WYNews);
