import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Card, CardItem, Body, Text, Icon } from 'native-base';
import moment from 'moment';

export default class AppTabContent extends Component {
  render() {
    const { sol, dateUTC } = this.props;

    return (
      <Container style={styles.container}>
        <Card>
          <CardItem style={styles.cardItem}>
            <Body style={styles.contentHeader}>
              <View>
                <Icon name='ios-snow' style={{fontSize: 40, color: '#241721'}} />
              </View>
              <View style={styles.divider} />
              <View>
                <Text style={styles.text}>Sol {sol}</Text>
                <View style={styles.hr} />
                <Text style={styles.text}>{moment(dateUTC).format('MMM D')}</Text>
              </View>
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'transparent'
  },
  cardItem: {
    backgroundColor: 'transparent'
  },
  hr: {
    margin: 2
  },
  text: {
    color: '#241721'
  },
  divider: {
    height: '50%',
    width: 1,
    backgroundColor: 'rgba(36, 23, 33, 0.15)'
  }
});