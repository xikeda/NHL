import React, { Component } from 'react';
import {ScrollView, Text} from 'react-native';
import axios from 'axios';
import GameDetail from './GameDetail';
import Card from './Card';
import TeamCardSection2 from './TeamCardSection2';

class GameList extends Component {
  state = { games: [], date: [] };

  componentWillMount() {
    axios.get('https://nhl-score-api.herokuapp.com/api/scores/latest')
      .then(response => this.setState({games: response.data.games, date: response.data.date.pretty}));
      console.log(this.state);
  }

  renderGames() {
    return this.state.games
    .map(game =>
       <GameDetail game={game}/>
     );
  }

  render() {
    return (
      <ScrollView style={{marginBottom: 10}}>
        <Card>
          <TeamCardSection2>
            <Text>Home:</Text>
            <Text style={styles.titleStyle}>{this.state.date}</Text>
            <Text>Away:</Text>
          </TeamCardSection2>
        </Card>
        {this.renderGames()}
      </ScrollView>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    alignSelf: 'center',
  },
};

export default GameList;
