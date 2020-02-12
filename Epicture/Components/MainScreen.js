import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import {Icon} from 'native-base';
import AddMediaTab from './AddMediaTab';
import FavorisTab from './FavorisTab';
import HomeTab from './HomeTab';
import ProfileTab from './ProfileTab';
import SearchTab from './SearchTab';

class MainScreen extends Component {
  static navigationOptions = {
    headerLeft: () => <Icon name="camera" style={{paddingLeft: 10}} />,
    title: 'Epicture',
    headerRight: () => <Icon name="send" style={{paddingRight: 10}} />,
  };
  render() {
    return <Navigation />;
  }
}

const AppTabNavigation = createMaterialTopTabNavigator(
  {
    HomeTab: {
      screen: HomeTab,
    },
    SearchTab: {
      screen: SearchTab,
    },
    AddMediaTab: {
      screen: AddMediaTab,
    },
    FavorisTab: {
      screen: FavorisTab,
    },
    ProfileTab: {
      screen: ProfileTab,
    },
  },
  {
    animationEnabled: true,
    swipeEnable: true,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      style: {
        backgroundColor: 'white',
      },
      activeTintColor: '#000',
      inactiveTintColor: '#d1cece',
      showLabel: false,
      showIcon: true,
    },
  },
);

const Navigation = createAppContainer(AppTabNavigation);

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
