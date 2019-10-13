import React, { Component } from "react";
import { StyleSheet } from 'react-native';
import { Header, Title, Body } from "native-base";

export default class AppHeader extends Component {
  render() {
    return (
      <Header transparent style={styles.header}>
        <Body>
          <Title style={styles.title}>Mars Weather</Title>
        </Body>
      </Header>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.25)'
  },
  title: {
    marginLeft: 15
  }
});