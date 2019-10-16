import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Tab, Tabs, ScrollableTab, Text, TabHeading, Content } from 'native-base';

import { apiKey } from '../../constants/apiKey';
import AppTabContent from './AppTabContent';

export default class AppTabs extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      weatherData: {}
    }
  }

  async componentDidMount() {
    try {
      const response = await fetch(`https://api.nasa.gov/insight_weather/?api_key=${apiKey}&feedtype=json&ver=1.`);
      const responseJson = await response.json();

      this.setState({
        isLoading: false,
        weatherData: responseJson,
      });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    const { weatherData } = this.state;

    const tabContent = Object.keys(weatherData).map(key => {
      return weatherData[key].hasOwnProperty('Season') && (
        <Tab
          key={key}
          heading={
            <TabHeading style={styles.heading}>
              <Content style={styles.tabContent}>
                <Text style={styles.text}>Sol {key}</Text>
              </Content>
            </TabHeading>
          }
          style={styles.tab}
        >
          <AppTabContent
            sol={key}
            dateUTC={weatherData[key].First_UTC}
            season={weatherData[key].Season}
          />
        </Tab>
      )
    });

    return (
      <Container style={styles.container}>
        <Tabs
          tabBarUnderlineStyle={styles.tabUnderLine}
          renderTabBar={() => <ScrollableTab style={styles.scrollableTab} />}
        >
          {tabContent.reverse()}
        </Tabs >
      </Container >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent'
  },
  scrollableTab: {
    backgroundColor: '#f0f0f0',
    borderBottomColor: 'transparent',
    borderBottomWidth: 0,
    height: 'auto',
    padding: 0,
  },
  tabUnderLine: {
    backgroundColor: '#241721'
  },
  heading: {
    backgroundColor: 'transparent',
    color: 'white',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  tabContent: {
    padding: 18
  },
  text: {
    color: '#241721'
  }
});