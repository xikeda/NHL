import React, { Component } from 'react';
import {Image, Text} from 'react-native';
import firebase from 'firebase';
import Input from './Input';
import Button from './Button';
import Card from './Card';
import CardSection from './CardSection';
import Spinner from './Spinner';

class LoginForm extends Component {
  state = {email: '', password: '', error: '', loading: false};

  onButtonPress() {
    const {email, password} = this.state;

    this.setState({ error: '', loading: true });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this));
      });
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: ''
    });
  }

  onLoginFail(){
    this.setState({error: 'Sign in failed', loading: false});
  }

  renderButton() {
    if(this.state.loading){
      return <Spinner size="small" />
    }
    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Sign In
      </Button>
    );
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Image
          resizeMode='contain'
          source={{uri: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/09/NHL_Center_Ice.svg/1280px-NHL_Center_Ice.svg.png'}}
          style={{height: 150, flex: 1, width: null}}
          />
        </CardSection>
        <CardSection>
          <Input
            placeholder="hockeyFan@gmail.com"
            label="Email:"
            value={this.state.email}
            onChangeText={email => this.setState({email})}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            placeholder="password"
            label="Password:"
            value={this.state.password}
            onChangeText={password => this.setState({password})}
          />
        </CardSection>
        <CardSection>
        <Text style={styles.errorStyle}>
          {this.state.error}
        </Text>
        {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}

export default LoginForm;
