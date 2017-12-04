import React, { Component } from 'react';
import {View, Text, Image} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const TeamDetail = ({team}) => {
  const {teamName, locationName} = team;

  return (
    <Card>
      <CardSection>
        <View style={styles.headerContentStyle}>
          <Text style={styles.headerTextStyle}>{locationName}</Text>
          <Text>{teamName}</Text>
        </View>
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  }
};

export default TeamDetail;
