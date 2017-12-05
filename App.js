import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import firebase from 'firebase';
import TeamList from './src/components/TeamList';
import Router from './src/Router';


export default class App extends Component<{}> {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBokjlguPSIJwjVrJjEadB5zbPiL7bvU7o',
      authDomain: 'nhlci-2a4d7.firebaseapp.com',
      databaseURL: 'https://nhlci-2a4d7.firebaseio.com',
      projectId: 'nhlci-2a4d7',
      storageBucket: 'nhlci-2a4d7.appspot.com',
      messagingSenderId: '622182062488'
    });
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Router />
      </View>
    );
  }
}
