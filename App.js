import * as React from 'react';
import { Image, } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import WriteStoryScreen from './screens/writestoryscreen';
import ReadStoryScreen from './screens/readstoryscreen';

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const tabNavigator = createBottomTabNavigator(
  {
    WriteStoryScreen: { screen: WriteStoryScreen },
    ReadStoryScreen: { screen: ReadStoryScreen },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ }) => {
        const routeName = navigation.state.routeName;
        if (routeName === 'WriteStoryScreen') {
          return (
            <Image
              source={require('./assets/write.png')}
              style={{ width: 40, height: 40, }} />
          );
        }
        else if (routeName === 'ReadStoryScreen') {
          return (
            <Image
              source={require('./assets/read.png')}
              style={{ width: 40, height: 40, }} />
          );
        }
      }
    })
  }
);

const AppContainer = createAppContainer(tabNavigator);