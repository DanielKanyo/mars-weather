import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Header, Title, Body } from 'native-base';

export default class AppHeader extends Component {
  render() {
    return (
      <Header transparent>
        <Body>
          <Title style={styles.title}>Mars Weather</Title>
        </Body>
      </Header>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    marginLeft: 15
  }
});