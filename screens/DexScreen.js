import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import DexListItem from '../components/DexListItem';
import { _ } from 'lodash';

export default class DexScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = { navigation: props.navigation }
        console.log(props)
    }
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={_.range(1, 893)}
                    renderItem={({ item, index }) => <DexListItem key={index} number={item} navigation={this.state.navigation} />}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#aaa',
    }
});