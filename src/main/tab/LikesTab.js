import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
 
export default class LikesTab extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>LikesTab</Text>
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
