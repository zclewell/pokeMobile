import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


export class GenSelector extends React.Component {
    render() {
        return (<TouchableOpacity onPress={this.props.onPress}>
            <View style={[styles.genContainer, this.props.selected === this.props.text ? styles.selected : styles.unselected]}>
                <Text>{this.props.text}</Text>
            </View>
        </TouchableOpacity>);
    }
}

const styles = StyleSheet.create({
    genContainer: {
        padding: 10,
        marginHorizontal: 4,
        borderRadius: 10
    },
    unselected: {
        backgroundColor: '#e0e0e0'
    },
    selected: {
        backgroundColor: '#fefefe'
    },
})