import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { FlatList, ScrollView, TouchableOpacity, TextInput } from 'react-native-gesture-handler';
import DexListItem from '../components/DexListItem';
import { _ } from 'lodash';

import { GenSelector } from '../components/GenSelector';

export default class DexScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = { range : _.range(1,894), selected: "All"}
        console.log(props)
    }

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Pokemon'
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView 
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={{marginVertical: 8}}
                >
                    <GenSelector text={"All"} onPress={() => this.setState({ range: _.range(1, 894), selected: 'All'})} selected={this.state.selected}/>
                    <GenSelector text={"Gen I"} onPress={() => this.setState({ range: _.range(1, 152), selected: "Gen I" })} selected={this.state.selected}/>
                    <GenSelector text={"Gen II"} onPress={() => this.setState({ range: _.range(152, 252), selected: "Gen II" })} selected={this.state.selected}/>
                    <GenSelector text={"Gen III"} onPress={() => this.setState({ range: _.range(252, 387), selected: "Gen III" })} selected={this.state.selected}/>
                    <GenSelector text={"Gen IV"} onPress={() => this.setState({ range: _.range(387, 494), selected: "Gen IV" })}selected={this.state.selected}/>
                    <GenSelector text={"Gen V"} onPress={() => this.setState({ range: _.range(494, 650), selected: "Gen V" })} selected={this.state.selected}/>
                    <GenSelector text={"Gen VI"} onPress={() => this.setState({ range: _.range(650, 722), selected: "Gen VI" })} selected={this.state.selected}/>
                    <GenSelector text={"Gen VII"} onPress={() => this.setState({ range: _.range(722, 810), selected: "Gen VII" })} selected={this.state.selected}/>
                    <GenSelector text={"Gen VIII"} onPress={() => this.setState({ range: _.range(810, 891), selected: "Gen VIII" })} selected={this.state.selected}/>

                </ScrollView>
                <FlatList
                    style={styles.flatList}
                    data={this.state.range}
                    renderItem={({ item }) => <DexListItem key={item} number={item} navigation={this.props.navigation}/>}
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
    flatList: {
    },
    searchContainer: {
        
        backgroundColor: 'red'
    }

});