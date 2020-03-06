import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import _ from 'lodash';

export default class TabbedDex extends React.Component {
    constructor(props) {
        super(props);
        _entries = {
            "Red": "A description from red",
            "Blue": "A description from blue",
            "Yellow": "A description from yellow",
            "Stadium": "A description from stadium",
            "Gold": "A description from gold",
            "Silver": "A description from silver",
            "Crystal": "A description from crystal",
            "Stadium 2": "A description from stadium 2",
            "Ruby": "A description from ruby",
            "Sapphire": "A description from sapphire",
            "Emerald": "A description from emerald",
            "FireRed": "A description from fireRed",
            "LeafGreen": "A description from leafGreen",
            "Diamond": "A description for Diamond",
            "Pearl": "A description for Pearl",
            "Platinum": "A description for Platinum",
            "HeartGold": "A description for HeartGold",
            "SoulSilver": "A description for SoulSilver",
            "Black": "A description for Black",
            "White": "A description for White",
            "Black 2": "A description for Black 2",
            "White 2": "A description for White 2",
            "X": "A description for X",
            "Y": "A description for Y",
            "Omega Ruby": "A description for Omega Ruby",
            "Alpha Sapphire": "A description for Alpha Sapphire",
            "Let's Go Pikachu": "A description for Let's Go Pikachu",
            "Let's go Eevee": "A description for Let's go Eevee",
            "Sword": "A description for Sword",
            "Shield": "A description for Shield"
        }
        _selected = _.keys(_entries)[0]
        this.state = {
            entries: _entries,
            selected: _selected
        }
    }

    render() {
        return (
            <View>
                <Text style={{ marginBottom: 5 }}>Dex Entries</Text>
                <FlatList
                    data={_.keys(this.state.entries)}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index }) =>
                        <TouchableOpacity key={index} onPress={() => { this.setState({ selected: item }) }}>
                            <View style={[styles.tab, styles[item]]}>
                                <Text style={styles[item]}>{item}</Text>
                            </View>
                        </TouchableOpacity>}
                />
                <View style={[{ marginTop: 5, borderTopLeftRadius: 10, borderTopRightRadius: 10 }, styles[this.state.selected]]}>
                    <Text style={{ backgroundColor: 'white', marginTop: 10 }}>{this.state.entries[this.state.selected]}</Text>
                </View>

            </View>
        )
    }

}

const styles = StyleSheet.create({
    Red: {
        backgroundColor: '#ff1111'
    },
    Blue: {
        backgroundColor: '#1111ff',
        color: '#ffffff'
    },
    Yellow: {
        backgroundColor: '#ffd733'
    },
    Stadium: {
        backgroundColor: '#000000',
        color: '#ffffff'
    },
    Gold: {
        backgroundColor: '#daa520'
    },
    Silver: {
        backgroundColor: '#c0c0c0'
    },
    Crystal: {
        backgroundColor: '#4fd9ff'
    },
    'Stadium 2': {
        backgroundColor: '#000000',
        color: '#ffffff'
    },
    Ruby: {
        backgroundColor: '#a00000',
        color: '#ffffff'
    },
    Sapphire: {
        backgroundColor: '#0000a0',
        color: '#ffffff'
    },
    Emerald: {
        backgroundColor: '#00a000',
        color: '#ffffff'
    },
    FireRed: {
        backgroundColor: '#ff7327'
    },
    LeafGreen: {
        backgroundColor: '#00dd00'
    },
    Diamond: {
        backgroundColor: '#aaaaff'
    },
    Pearl: {
        backgroundColor: '#ffaaaa'
    },
    Platinum: {
        backgroundColor: '#999999'
    },
    HeartGold: {
        backgroundColor: '#b69e00'
    },
    SoulSilver: {
        backgroundColor: '#c0c0e1'
    },
    Black: {
        backgroundColor: '#444444',
        color: '#ffffff'
    },
    White: {
        backgroundColor: '#e1e1e1'
    },
    'Black 2': {
        backgroundColor: '#424b50',
        color: '#ffffff'
    },
    'White 2': {
        backgroundColor: '#e3ced0'
    },
    X: {
        backgroundColor: '#025da6',
        color: '#ffffff'
    },
    Y: {
        backgroundColor: '#ea1a3e'
    },
    'Omega Ruby': {
        backgroundColor: '#ab2813',
        color: '#ffffff'
    },
    'Alpha Sapphire': {
        backgroundColor: '#26649c',
        color: '#ffffff'
    },
    "Let's Go Pikachu": {
        backgroundColor: '#f5da26'
    },
    "Let's go Eevee": {
        backgroundColor: '#d4924b'
    },
    Sword: {
        backgroundColor: '#00a1e9'
    },
    Shield: {
        backgroundColor: '#bf004f'
    },
    tab: {
        padding: 10,
        borderRadius: 10,
        marginRight: 10,
        overflow: 'hidden'
    }

})