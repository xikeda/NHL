import React from 'react';
import { Text, View } from 'react-native';

const ImageHeader = props => (
  <View style={{ backgroundColor: '#eee' }}>
    <Image
      style={StyleSheet.absoluteFill}
      source={{ uri: 'http://611enterprises.com/wp-content/uploads/2014/11/NHL_BANNER.jpg' }}
    />
    <Header {...props} style={{ backgroundColor: 'transparent' }}/>
  </View>
);

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
};

export default Header;
