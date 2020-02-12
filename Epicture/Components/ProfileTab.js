import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {Icon} from 'native-base';

class ProfileTab extends Component {
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Icon name="person" style={{color: tintColor}} />
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

export default ProfileTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
