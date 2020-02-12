import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Icon, Container, Content} from 'native-base';
import CardComponent from './CardComponent';

class HomeTab extends Component {
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Icon name="home" style={{color: tintColor}} />
    ),
  };

  render() {
    return (
      <Container>
        <Content>
          <CardComponent />
        </Content>
      </Container>
    );
  }
}

export default HomeTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
