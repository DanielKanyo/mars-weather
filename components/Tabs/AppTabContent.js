import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Card, CardItem, Body, Text, Icon } from 'native-base';
import moment from 'moment';

export default class AppTabContent extends Component {

  /**
   * Get season icon to display
   */
  getSeasonIcon = (season) => {
    switch (season) {
      case 'winter':
        return 'ios-snow';
      case 'fall':
        return 'ios-leaf';
      case 'summer':
        return 'ios-sunny'
      case 'spring':
        return 'md-flower';

      default:
        return 'ios-snow';
    }
  }

  render() {
    const { sol, dateUTC, season } = this.props;

    return (
      <Container style={styles.container}>
        <Card style={styles.card}>
          <CardItem>
            <Body style={styles.contentHeader}>
              <View style={styles.info}>
                <Text style={[styles.text, styles.bold]}>Sol {sol}</Text>
                <Text style={styles.text}>{moment(dateUTC).format('MMM D')}</Text>
              </View>
              <View style={styles.divider} />
              <View style={[styles.info, styles.seasonInfo]}>
                <Text style={styles.text}>{`${season[0].toUpperCase()}${season.slice(1)}`}</Text>
              </View>
            </Body>
          </CardItem>
          <Icon name={this.getSeasonIcon(season)} style={styles.icon} />
        </Card>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    padding: 20,
    backgroundColor: 'transparent'
  },
  card: {
    position: 'relative'
  },
  contentHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  info: {
    width: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60
  },
  icon: {
    fontSize: 24,
    color: '#d6d6d6',
    position: 'absolute',
    top: 8,
    right: 13
  },
  text: {
    color: '#241721'
  },
  divider: {
    height: '60%',
    width: 1,
    backgroundColor: 'rgba(36, 23, 33, 0.15)'
  },
  bold: {
    fontWeight: 'bold'
  }
});