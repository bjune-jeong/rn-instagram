import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
 
export default class HomeTab extends Component {
    render() {
        return (
            <View style={StyleSheet.container}>
                <Text>ProfileTab</Text>
            </View>
        );
    }
}
 
const styles = StyleSheet.create({
    container: {
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    }
});
