import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default class DetailScreen extends Component {

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text>DetailScreen</Text>
        <Button title="Movo to Home" onPress={()=> navigation.push('Detail')}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});