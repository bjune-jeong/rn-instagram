import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Animated } from 'react-native';
 
export default class HomeTab extends Component {
    state = {
        animTransVal: new Animated.Value(0)
    }

    textAnimDown = null;
    textAnimUp = null;
    isDown = true;

    componentDidMount() {
        
        textAnimDown = Animated.timing(
            this.state.animTransVal,
            anim.textDown,
        );
        textAnimUp = Animated.timing(
            this.state.animTransVal,
            anim.textUp,
        );
        isDown = true;
    }

    onClickButton() {
        console.log("howiehofiwhef", this.isDown);
        if (this.isDown) {
            console.log("howiehofiwhef");
            this.textAnimDown.start();
        } else {
            this.textAnimUp.start();
        }
        this.isDown = !this.isDown;
    }

    render() {
        const { navigation } = this.props;
        const { animTransVal } = this.state;

        const animationStyles = {
            transform: [
              { translateY: animTransVal }
            ]
          };

        return (
            <View style={styles.container}>
                <Text>HomeTab</Text>
                {/* <Animated.View style={[styles.test, animationStyles]}> */}
                    {/* <Text style={{color:'#ffffff'}}>hihi</Text> */}
                {/* </Animated.View> */}
                <Button title="Movo to Detail" onPress={()=> navigation.push('Detail')}/>
                {/* <Button title="Movo to Detail" onPress={this.onClickButton}/> */}
            </View>
        );
    }
}
 
const styles = StyleSheet.create({
    container: {
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff'
    },
    test: {
        backgroundColor: '#000000'
    }
});

const anim = {
    textDown: {
        toValue: 250,
        duration: 2000,
        useNativeDriver: true,
    },
    textUp: {
        toValue: 0,
        duration: 2000,
        useNativeDriver: true,
    }
}
