import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Icon} from 'native-base';

class AddMediaTab extends Component {
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Icon name="add-circle" style={{color: tintColor}} />
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

export default AddMediaTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
