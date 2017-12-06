import React from 'react';
import {Scene, Router} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import TeamList from './components/TeamList';

const RouterComponent = () => {
  return (
    <Router>
      <Scene>
        <Scene key="Login" component={LoginForm} title="NHL Center Ice" inital/>
        <Scene key="TeamList" component={TeamList} title="NHL Teams" />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
