import React from 'react';
import {Scene, Router} from 'react-native-router-flux';
import TeamList from './components/TeamList';
import LoginForm from './components/LoginForm';

const RouterComponent = () => {
  return (
    <Router>
      <Scene>
        <Scene key="main" component={TeamList} title="NHL Teams" />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
