import React from 'react';
import { StyleSheet, Text, View, Platform, StatusBar } from 'react-native';

import StackNavigator from './navigation/StackNavigator';

export default function App() {
  return (
    <View style={styles.container}>
      {Platform.OS === 'ios' && <StatusBar barStyle="default"/>}
      <StackNavigator/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
