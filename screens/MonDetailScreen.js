import * as React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView, FlatList } from 'react-native-gesture-handler';
import { _ } from 'lodash'

import TypeListItem from '../components/TypeListItem';
import TabbedDex from '../components/TabbedDex';


export default class MonDetailScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = { mon: props.navigation.state.params.mon }
        props.navigation.setParams
    }

    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('mon').name
        }
    }

    render() {
        return (
            <View>
                <View style={styles.container}>
                    <View style={styles.name_number_container}>
                        <View>
                            <Text style={styles.name}>{this.state.mon.name}</Text>
                            <Text style={styles.category}>{this.state.mon.category}</Text>
                        </View>
                        <Text style={styles.number}>{this.state.mon.number}</Text>
                    </View>
                </View>
                <ScrollView>
                    <View style={{ alignItems: 'center' }}>
                        <Image
                            style={{ width: 250, height: 250 }}
                            source={{ uri: 'https://' + this.state.mon.image }}
                        />
                    </View>
                    <View style={styles.container}>
                        <Text style={styles.types}>Types:</Text>
                        <FlatList
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            data={this.state.mon.types}
                            renderItem={({ item, index }) => <TypeListItem key={index} type={item} />}
                        />
                        <Text style={styles.abilities}>Abilities:</Text>
                        <FlatList
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            data={this.state.mon.abilities}
                            renderItem={({ item, index }) => <TouchableOpacity><View style={styles.ability_item}><Text key={index}>{item}</Text></View></TouchableOpacity>}
                        />
                        <View style={{ marginTop: 5 }}>
                            <TabbedDex />
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 5,
        margin: 5,
        borderRadius: 5,
        backgroundColor: 'white',
    },
    name_number_container: {
        flexDirection: 'row',
    },
    name: {
        fontSize: 30,
    },
    number: {
        fontSize: 40,
        marginLeft: 'auto',
        alignSelf: 'center'
    },
    category: {
        paddingTop: 5,
        paddingBottom: 10
    },
    abilities: {
        paddingBottom: 5
    },
    ability_item: {
        padding: 10,
        backgroundColor: '#f0f0f0',
        marginRight: 10,
        borderRadius: 10
    },
})