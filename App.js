import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import firebase from 'firebase';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import configureStore from './src/components/configureStore';
import TeamList from './src/components/TeamList';
import Router from './src/Router';
import Spinner from './src/components/Spinner';
import Button from './src/components/Button';
import LoginForm from './src/components/LoginForm';
import reducers from './src/reducers/index';

const store = configureStore();


export default class App extends Component<{}> {
  state = {loggedIn: null};

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBokjlguPSIJwjVrJjEadB5zbPiL7bvU7o',
      authDomain: 'nhlci-2a4d7.firebaseapp.com',
      databaseURL: 'https://nhlci-2a4d7.firebaseio.com',
      projectId: 'nhlci-2a4d7',
      storageBucket: 'nhlci-2a4d7.appspot.com',
      messagingSenderId: '622182062488'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if(user){
        this.setState({loggedIn: true});
      }else{
        this.setState({loggedIn: false});
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>
            Log Out
          </Button>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <Router />
        </View>
      </Provider>
    );
  }
}
