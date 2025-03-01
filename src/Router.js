import React from 'react';
import {Scene, Router} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import TeamList from './components/TeamList';
import GameList from './components/GameList';
import TeamDetail from './components/TeamDetail';
import TeamCenter from './components/TeamCenter';

const RouterComponent = () => {
  return (
    <Router>
      <Scene>
        <Scene key="Login" component={LoginForm} title="NHL Center Ice"/>
        <Scene key="TeamList" component={TeamList} title="NHL Teams" initial/>
        <Scene key="TeamCenter" component={TeamCenter} title="Team"/>
        <Scene key="GameList" component={GameList} title="NHL Scoreboard" />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
