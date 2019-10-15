import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Container } from 'native-base';
import moment from 'moment';

export default class AppTabContent extends Component {
  render() {
    const { sol, dateUTC } = this.props;

    console.log(dateUTC);

    return (
      <Container style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.text}>Sol {sol}</Text>
          <View style={styles.hr} />
          <Text style={styles.text}>{moment(dateUTC).format('MMMM D, YYYY')}</Text>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    padding: 22,
    backgroundColor: 'transparent'
  },
  header: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    height: 90,
    borderRadius: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: 'white',
    fontSize: 20
  },
  hr: {
    margin: 4
  }
});