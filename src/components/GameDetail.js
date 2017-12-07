import React, { Component } from 'react';
import {View, Text, Image, TouchableOpacity, Linking} from 'react-native';
import Card from './Card';
import TeamCardSection from './TeamCardSection';

const GameDetail = ({game}) => {
  const {scores, teams, date, state, records} = game;

  return (
    <TouchableOpacity>
      <Card>
        <TeamCardSection>
        <Text>{teams["home"]}</Text><Text>{scores[Object.keys(scores)[1]]}</Text>
        <Text>{state}</Text>
        <Text>{scores[Object.keys(scores)[0]]}</Text><Text>{teams["away"]}</Text>
        </TeamCardSection>
      </Card>
    </TouchableOpacity>
  );
};


export default GameDetail;
