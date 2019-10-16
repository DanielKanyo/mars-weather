import React, { Component } from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import { Container } from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';

import AppHeader from '../Header/AppHeader';
import AppTabs from '../Tabs/AppTabs';

export default class Home extends Component {
  render() {
    return (
      <ImageBackground source={require('../../assets/marsbg.jpg')} style={styles.backgroundImage}>
        <LinearGradient
          colors={['#cc1e2c', '#741630', '#40152a']}
          style={styles.linearGradient}
        >
          <AppHeader />
          <Container style={styles.container}>
            <AppTabs />
          </Container>
        </LinearGradient>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: '100%'
  },
  linearGradient: {
    width: '100%',
    height: '100%',
    opacity: 0.9
  },
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center'
  }
});