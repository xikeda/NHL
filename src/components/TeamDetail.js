import React, { Component } from 'react';
import {View, Text, Image, TouchableOpacity, Linking} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const TeamDetail = ({team}) => {
  const {teamName, locationName, logo, primeColor, officialSiteUrl} = team;

  return (
    <TouchableOpacity onPress={() => Linking.openURL(officialSiteUrl)}>
      <Card>
        <CardSection>
          <View style={styles.thumbnailContainerStyle}>
            <Image style={styles.thumbnailStyle}
                   resizeMode='contain'
                   source={{uri: logo}}
            />
          </View>
          <View style={styles.headerContentStyle}>
            <Text>{locationName}</Text>
            <Text style={styles.headerTextStyle}>{teamName.toUpperCase()}</Text>
          </View>
        </CardSection>
      </Card>
    </TouchableOpacity>
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
    marginRight: 10,
  }
};

export default TeamDetail;
