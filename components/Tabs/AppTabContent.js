import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Card, CardItem, Body, Text } from 'native-base';
import moment from 'moment';

export default class AppTabContent extends Component {
  render() {
    const { sol, dateUTC } = this.props;

    return (
      <Container style={styles.container}>
        <Card style={styles.card}>
          <CardItem style={styles.cardItem}>
            <Body style={styles.contentHeader}>
              <Text style={styles.text}>Sol {sol}</Text>
              <View style={styles.hr} />
              <Text style={styles.text}>{moment(dateUTC).format('MMM D')}</Text>
            </Body>
          </CardItem>
        </Card>
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
  contentHeader: {
    height: 90,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)'
  },
  cardItem: {
    backgroundColor: 'transparent'
  },
  hr: {
    margin: 2
  },
  text: {
    color: '#241721'
  }
});