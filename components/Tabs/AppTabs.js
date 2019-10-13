import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Tab, Tabs, ScrollableTab, Text, TabHeading, Icon } from 'native-base';

export default class AppTabs extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Tabs renderTabBar={() => <ScrollableTab style={styles.scrollableTab} />}>
          <Tab
            heading={
              <TabHeading style={styles.heading}>
                <Text style={styles.text}>Sol 305</Text>
              </TabHeading>
            }
            style={styles.tab}
          >
            <Text style={styles.text}>Test1</Text>
          </Tab>
          <Tab
            heading={
              <TabHeading style={styles.heading}>
                <Text style={styles.text}>Sol 306</Text>
              </TabHeading>
            }
            style={styles.tab}
          >
            <Text style={styles.text}>Test2</Text>
          </Tab>
          <Tab
            heading={
              <TabHeading style={styles.heading}>
                <Text style={styles.text}>Sol 307</Text>
              </TabHeading>
            }
            style={styles.tab}
          >
            <Text style={styles.text}>Test3</Text>
          </Tab>
          <Tab
            heading={
              <TabHeading style={styles.heading}>
                <Text style={styles.text}>Sol 308</Text>
              </TabHeading>
            }
            style={styles.tab}
          >
            <Text style={styles.text}>Test4</Text>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent'
  },
  scrollableTab: {
    backgroundColor: 'transparent',
    borderBottomColor: 'transparent',
    height: 65
  },
  heading: {
    backgroundColor: 'transparent',
    color: 'white'
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  text: {
    color: 'white'
  }
});