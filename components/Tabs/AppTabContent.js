import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Text, Container } from 'native-base';

export default class AppTabContent extends Component {
  render() {
    const { sol } = this.props;

    return (
      <Container style={styles.container}>
        <Text style={styles.text}>Sol {sol}</Text>
      </Container>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  text: {
    color: 'white'
  }
});