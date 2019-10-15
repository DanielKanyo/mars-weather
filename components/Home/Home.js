import React, { Component } from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import { Container } from 'native-base';

import AppHeader from '../Header/AppHeader';
import AppTabs from '../Tabs/AppTabs';

export default class Home extends Component {
  render() {
    return (
      <ImageBackground source={require('../../assets/marsbg.jpg')} style={styles.background}>
        <AppHeader />
        <Container style={styles.container}>
          <AppTabs />
        </Container>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%'
  },
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: 'white',
    fontSize: 22
  }
});