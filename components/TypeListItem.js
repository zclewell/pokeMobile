import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export default class TypeListItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {type: props.type }
    }

    render() {
        
        
        return (
            <View style={[styles.type_item, TypeDict[this.props.type]]}>
                <Text style={{color: 'white'}}>{this.props.type}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 5,
    },
    name: {
        fontSize: 30,
    },
    category: {
        paddingTop: 5,
        paddingBottom: 10
    },
    abilities: {
        paddingBottom: 5
    },
    type_item: {
        padding: 10,
        marginRight: 10,
        borderRadius: 10
    },
})

const TypeDict = {
    "Bug": {
        backgroundColor: "#a8b820",
        color: "white"
    },
    "Dark": {
        backgroundColor: "#705848",
        color: "white"
    },
    "Dragon": {
        backgroundColor: "#7038f8",
        color: "white"
    },
    "Electric": {
        backgroundColor: "#f8d030",
        color: "white"
    },
    "Fairy": {
        backgroundColor: "#ee99ac",
        color: "white"
    },
    "Fighting": {
        backgroundColor: "#c03028",
        color: "white"
    },
    "Fire": {
        backgroundColor: "#f08030",
        color: "white"
    },
    "Flying": {
        backgroundColor: "#a890f0",
        color: "white"
    },
    "Ghost": {
        backgroundColor: "#705898",
        color: "white"
    },
    "Grass": {
        backgroundColor: "#78c850",
        color: "white"
    },
    "Ground": {
        backgroundColor: "#e0c068",
        color: "white"
    },
    "Ice": {
        backgroundColor: "#98d8d8",
        color: "white"
    },
    "Normal": {
        backgroundColor: "#a8a878",
        color: "white"
    },
    "Poison": {
        backgroundColor: "#a040a0",
        color: "white"
    },
    "Psychic": {
        backgroundColor: "#f85888",
        color: "white"
    },
    "Steel": {
        backgroundColor: "#b8b8d0",
        color: "white"
    },
    "Rock": {
        backgroundColor: "#b8a038",
        color: "white"
    },
    "Water": {
        backgroundColor: "#6890f0",
        color: "white"
    },
}