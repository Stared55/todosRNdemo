import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { Colors } from 'src/utils/styles/colors';
import { yScale } from 'src/utils/styles/scale';
import HomeScreen from '../../screens/HomeScreen';
import SettingsScreen from '../../screens/SettingsScreen';

export interface RootNavigatorProps {}

export type TabParamList = {
  Home: undefined;
  Settings: undefined;
};

const tabBarOptions = {
  style: {
    backgroundColor: Colors.white,
  },
  labelStyle: {
    fontSize: yScale(14),
  },
};

const Tab = createBottomTabNavigator<TabParamList>();

const RootNavigator: React.SFC<RootNavigatorProps> = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBarOptions={tabBarOptions}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
