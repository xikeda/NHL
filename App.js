import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Header from './src/components/header';
import TeamList from './src/components/TeamList';

export default class App extends Component<{}> {
  render() {
    return (
      <View style={{ flex: 1}}>
        <Header headerText={'NHL Center Ice'}/>
        <TeamList />
      </View>
    );
  }
}
