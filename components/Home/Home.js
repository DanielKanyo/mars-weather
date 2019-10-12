import React, { Component } from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import { Container, Text } from 'native-base';

export default class Home extends Component {
 

  render() {
    return (
      <ImageBackground source={require('../../assets/marsbg.jpg')} style={{width: '100%', height: '100%'}}>
        <Container style={styles.container}>
            <Text style={styles.text}>Mars Weather App</Text>
        </Container>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontFamily: 'Roboto',
    fontSize: 22
  }
});