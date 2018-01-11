import React, { Component } from 'react';
import {View, Text, Image, Linking} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import TeamCardSection from './TeamCardSection';
import TeamCardSection2 from './TeamCardSection2';
import MapContainer from './MapContainer';
import Button from './Button';
import MapView from 'react-native-maps';

const TeamCenter = ({team}) => {
  const {name, venue, firstYearOfPlay, division, conference, teamName, locationName, logo, officialSiteUrl, longitude, latitude} = team;

  return (
      <Card>
        <CardSection>
          <Image
            resizeMode='contain'
            source={{uri: logo}}
            style={{height: 120, flex: 1, width: null}}
          />
        </CardSection>
        <TeamCardSection2>
          <Text style={styles.titleStyle}>{name}</Text>
        </TeamCardSection2>
        <TeamCardSection>
          <Text>{division.name} Division</Text>
          <Text>{conference.name} Conference</Text>
        </TeamCardSection>
        <TeamCardSection>
          <Text>Inaugural season: {firstYearOfPlay}</Text>
          <Text>Location: {locationName}</Text>
        </TeamCardSection>
        <TeamCardSection2>
          <Text>{venue.name}</Text>
        </TeamCardSection2>
        <MapContainer>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 43.642499,
            longitude: -79.382577,
            latitudeDelta: 0.03,
            longitudeDelta: 0.03,
          }}
          >
          <MapView.Marker
            coordinate={{
              latitude: 43.642499,
              longitude: -79.382577
            }}
            title={'Air Canada Center'}
            description={'Home of the Leafs'}
          />
        </MapView>
        </MapContainer>
        <TeamCardSection2>
          <Text>Next home game vs Ottawa @ 7PM EST</Text>
        </TeamCardSection2>
        <TeamCardSection2>
          <Button onPress={() => Linking.openURL(officialSiteUrl)}>Buy Tickets!</Button>
        </TeamCardSection2>
        <TeamCardSection2>
          <Button onPress={() => Linking.openURL(officialSiteUrl)}>Visit Website</Button>
        </TeamCardSection2>
      </Card>
  );
};

const styles = {
  titleStyle: {
    fontSize: 18,
    alignSelf: 'center',
  },
  map: {

    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  }
};

export default TeamCenter;
