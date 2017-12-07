import React, { Component } from 'react';
import {View, Text, Image, Linking} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import TeamCardSection from './TeamCardSection';
import TeamCardSection2 from './TeamCardSection2';
import MapContainer from './MapContainer';
import Button from './Button';
import MapView from 'react-native-maps';

const TeamCenter = (props) => {
  const {teamName, locationName, logo, primeColor, officialSiteUrl} = props;
  return (
      <Card>
        <CardSection>
          <Image
            resizeMode='contain'
            source={{uri: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b6/Toronto_Maple_Leafs_2016_logo.svg/917px-Toronto_Maple_Leafs_2016_logo.svg.png'}}
            style={{height: 120, flex: 1, width: null}}
          />
        </CardSection>
        <TeamCardSection2>
          <Text style={styles.titleStyle}>Toronto Maple Leafs</Text>
        </TeamCardSection2>
        <TeamCardSection2>
          <Text>18-10-1</Text>
        </TeamCardSection2>
        <TeamCardSection>
          <Text>#2 in the Atlantic</Text>
          <Text>#2 in the East</Text>
        </TeamCardSection>
        <TeamCardSection>
          <Text>Circa: 1917</Text>
          <Text>City: Toronto</Text>
        </TeamCardSection>
        <TeamCardSection2>
          <Text>Home: Air Canada Centre</Text>
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
          <Text>Next home game: 7PM EST Sunday vs OTT </Text>
        </TeamCardSection2>
        <TeamCardSection2>
          <Button>Buy Tickets!</Button>
        </TeamCardSection2>
        <TeamCardSection2>
          <Button>Visit Website</Button>
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
