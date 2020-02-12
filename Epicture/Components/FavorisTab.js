import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Icon} from 'native-base';

class FavorisTab extends Component {
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Icon name="heart" style={{color: tintColor}} />
    ),
  };
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    );
  }
}

export default FavorisTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
