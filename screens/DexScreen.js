import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import DexListItem from '../components/DexListItem';
import { _ } from 'lodash';

class GenSelectror extends React.Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress}>
                <View style={styles.genContainer}>
                    <Text>{this.props.text}</Text>
                </View>
            </TouchableOpacity>)
    }
}

export default class DexScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = { navigation: props.navigation, range : _.range(1,894) }
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
                    <GenSelectror text={"All"} onPress={() => this.setState({ range: _.range(1, 894) })} />
                    <GenSelectror text={"Gen I"} onPress={() => this.setState({ range: _.range(1, 152) })}/>
                    <GenSelectror text={"Gen II"} onPress={() => this.setState({ range: _.range(152, 252) })} />
                    <GenSelectror text={"Gen III"} onPress={() => this.setState({ range: _.range(252, 387) })} />
                    <GenSelectror text={"Gen IV"} onPress={() => this.setState({ range: _.range(387, 494) })}/>
                    <GenSelectror text={"Gen V"} onPress={() => this.setState({ range: _.range(494, 650) })} />
                    <GenSelectror text={"Gen VI"} onPress={() => this.setState({ range: _.range(650, 722) })} />
                    <GenSelectror text={"Gen VII"} onPress={() => this.setState({ range: _.range(722, 810) })} />
                    <GenSelectror text={"Gen VIII"} onPress={() => this.setState({ range: _.range(810, 891) })} />

                </ScrollView>
                <FlatList
                    style={styles.flatList}
                    data={this.state.range}
                    renderItem={({ item }) => <DexListItem key={item} number={item} navigation={this.state.navigation}/>}
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
    genContainer: {
        padding: 10,
        backgroundColor: '#f0f0f0',
        marginHorizontal: 4,
        borderRadius: 10
    }
});