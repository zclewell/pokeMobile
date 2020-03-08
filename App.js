import React from 'react';
import { StyleSheet, View, Platform, StatusBar } from 'react-native';
import _ from 'lodash';

import StackNavigator from './navigation/StackNavigator';

export default class App extends React.Component {
  _isMounted = false;

  constructor(props) {
    super(props);
    this.state = { monDict: {}, loaded: 0, loading: true}
  }

  componentDidMount() {
    this._isMounted = true;
    _.range(1, 894).forEach(element => {
      let url = "http://192.168.86.28:8081/number/" + element;
      let settings = { method: 'Get' };
      fetch(url, settings).then(res => res.json()).then((json) => {
        if (this._isMounted) {
          let tmpDict = this.state.monDict
          tmpDict[element] = json;
          let tmpCount = this.state.loaded + 1;
          this.setState({ monDict: tmpDict, loaded: tmpCount })
          if (this.state.loaded == 893) {
            this.setState({ loading: false });
          }
        }
      })
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }
  
  render() {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default"/>}
        {this.state.loading || <StackNavigator screenProps={{ monDict: this.state.monDict }}/>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
