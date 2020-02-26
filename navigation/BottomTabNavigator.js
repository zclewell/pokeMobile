import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarIcon from '../components/TabBarIcon';
import LinksScreen from '../screens/LinksScreen';
import StackNavigator from './StackNavigator';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  navigation.setOptions({ header: () => null });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="List"
        component={StackNavigator}
        options={{
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-book" />,
        }}
      />
      <BottomTab.Screen
        name="About"
        component={LinksScreen}
        options={{
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-help-circle" />,
        }}
      />
    </BottomTab.Navigator>
  );
}
