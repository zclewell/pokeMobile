import * as React from 'react';
import { Text, TouchableOpacity, View, StyleSheet, Image } from 'react-native';
import _ from 'lodash';



export default class DexListItem extends React.Component {
    _isMounted = false;
    constructor(props) {
        super(props)
        this.state = { loaded: true }
    }

    // componentDidMount() {
    //     this._isMounted = true;

    //     let url = "http://192.168.86.28:8081/number/" + this.props.number;
    //     let settings = { method: 'Get' };
    //     fetch(url, settings).then(res => res.json()).then((json) => { 
    //         if (this._isMounted) {
    //             this.setState({ loaded: true, mon: json }) 
    //         }
    //     })
    // }

    // componentWillUnmount() {
    //     this._isMounted = false;
    // }

    render() {
        if (this.state.loaded) {
            if (this.props.mon && this.props.mon.name.includes(this.props.query)) {
                return (
                    <TouchableOpacity onPress={() => this.props.mon ? this.props.navigation.navigate("MonDetailScreen", {
                        mon: this.props.mon
                    }) : console.log('onPress')}>
                        <View style={styles.item}>
                            <View>
                                <Text>{this.props.mon ? this.props.mon.number : '???'}</Text>
                                <Text style={styles.title}>{this.props.mon ? this.props.mon.name : '???'}</Text>
                            </View>
                            <View style={{flex: 1, justifyContent: 'center'}}>
                                <Image
                                    style={{ width: 60, height: 60, alignSelf: 'flex-end', backgroundColor: '#f0f0f0', borderRadius: 100}}
                                    source={this.props.mon ? { uri: 'https://' + this.props.mon.sprite } : {}}
                                />
                            </View>
                        </View>
                    </TouchableOpacity>
                    )
            } else {
                return (
                    <View/>
                )
            }
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
        marginBottom: 8,
        marginHorizontal: 16,
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        borderTopRightRadius: 100,
        borderBottomRightRadius: 100,
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