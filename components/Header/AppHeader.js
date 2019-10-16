import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Header, Title, Body, Left, Button, Icon, Right } from 'native-base';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export default class AppHeader extends Component {
  render() {
    return (
      <React.Fragment>
        <View style={styles.statusBarPlaceholder} />
        <Header style={styles.header}>
          <Left>
            <Icon style={[styles.icon, styles.headerIcon]} name='md-cloudy' />
          </Left>
          <Body>
          <Title style={styles.title}>Mars Weather</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon style={styles.icon} name='menu' />
            </Button>
          </Right>
        </Header>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  statusBarPlaceholder: {
    height: getStatusBarHeight(),
    backgroundColor: '#f0f0f0'
  },
  header: {
    backgroundColor: '#f0f0f0'
  },
  title: {
    color: '#241721'
  },
  icon: {
    color: '#241721'
  },
  headerIcon: {
    marginLeft: 10
  }
});