import React, { Component } from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import { Container, Text } from 'native-base';

import AppHeader from '../Header/AppHeader';
import AppTabs from '../Tabs/AppTabs';

export default class Home extends Component {
  render() {
    return (
      <ImageBackground source={require('../../assets/marsbg.jpg')} style={{ width: '100%', height: '100%' }}>
        <AppHeader />
        <Container style={styles.container}>
          <AppTabs />
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
    fontFamily: 'Roboto',
  },
  text: {
    color: 'white',
    fontSize: 22
  }
});