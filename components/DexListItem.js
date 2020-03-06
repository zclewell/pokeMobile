import * as React from 'react';
import { Text, TouchableOpacity, View, StyleSheet, Image } from 'react-native';



export default class DexListItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = { loaded: false, navigation: props.navigation }
    }

    componentDidMount() {
        let url = "http://192.168.86.28:8081/number/" + this.props.number;
        let settings = { method: 'Get' };
        fetch(url, settings).then(res => res.json()).then((json) => { this.setState({ loaded: true, mon: json }) })
    }

    render() {
        if (this.state.loaded) {
            return (
                <TouchableOpacity onPress={() => this.state.navigation.navigate("MonDetailScreen", {
                    mon: this.state.mon
                })}>
                    <View style={styles.item}>
                        <View>
                            <Text>{this.state.loaded ? this.state.mon.number : ""}</Text>
                            <Text style={styles.title}>{this.state.loaded ? this.state.mon.name : "Loading..."}</Text>
                        </View>
                        <View>
                            <Image
                                style={{ width: 80, height: 80, alignSelf: 'flex-end' }}
                                source={{ uri: 'https://' + this.state.mon.sprite }}
                            />
                        </View>
                    </View>
                </TouchableOpacity>
            )
        } else {
            return (
                <View style={styles.item}>
                    <Text style={styles.title}>{'Loading...'}</Text>
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#fefefe',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 15,
        flexDirection: 'row',
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
    title: {
        fontSize: 32,
    },
});