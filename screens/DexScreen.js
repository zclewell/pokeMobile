import * as React from 'react';
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import _ from 'lodash'

const fetch = require('node-fetch')

class MonListItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {loaded: false, navigation: props.navigation}
  }

  componentDidMount() {
    let formatted = this.props.number
    if (this.props.number < 10) {
      formatted = '0' + formatted
    }
    if  (this.props.number < 100) {
      formatted = '0' + formatted
    }
    let url = "http://192.168.86.250:8081/number/" + formatted
    let settings = { method: 'Get' }
    fetch(url, settings).then(res => res.json()).then((json) => { this.setState({loaded: true, mon: json}) })
  }

  render() {
    return (
      <TouchableOpacity onPress={() => this.state.navigation.navigate("detail", {
        mon:  this.state.mon
      })}>
      <View style={styles.item}>
        <Text>{this.state.loaded ? this.state.mon.number : ""}</Text>
        <Text style={styles.title}>{this.state.loaded ? this.state.mon.name : "Loading..."}</Text>
      </View>
      </TouchableOpacity>
    )
  }
}

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {navigation: props.navigation}
    console.log(props)
  }
  render() {
  return (
    <View style={styles.container}>
      <FlatList
        data={_.range(1,893)}
        renderItem={({ item, index }) => <MonListItem key={index} number={item} navigation={this.state.navigation}/>}
      />
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aaa',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  title: {
    fontSize: 32,
  },
  item: {
    backgroundColor: '#fefefe',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 15,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    })
  },
});
