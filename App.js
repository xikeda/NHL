import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import TeamList from './src/components/TeamList';
import Router from './src/Router';

export default class App extends Component<{}> {
  render() {
    return (
      <View style={{flex: 1}}>
        <Router />
      </View>
    );
  }
}
