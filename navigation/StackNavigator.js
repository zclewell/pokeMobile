import * as React from 'react';
import {  createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/DexScreen';
import DetailScreen from '../screens/MonDetailScreen';

const Stack = createStackNavigator();
const INITIAL_ROUTE_NAME = "dex"

export default function StackNavigator({navigation, route}) {
    return (
        <Stack.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
            <Stack.Screen
                name="dex"
                component={HomeScreen}
            />
            <Stack.Screen
                name="detail"
                component={DetailScreen}
            />
        </Stack.Navigator>
    )
}