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
          colors={['rgba(204, 30, 44, 0.8)', 'rgba(116, 22, 48, 0.8)', 'rgba(64, 21, 42, 0.8)']}
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
    height: '100%'
  },
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center'
  }
});