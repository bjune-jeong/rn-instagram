import React, { Component } from 'react';

import { StyleSheet, View, Text, SafeAreaView, StatusBar } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import LottieView from 'lottie-react-native';

import { Icon } from 'images'
import HomeTab from './tab/HomeTab'
import LikesTab from './tab/LikesTab'
import SearchTab from './tab/SearchTab'
import SettingsTab from './tab/SettingsTab'
import AddMediaTab from './tab/AddMediaTab'
import TabBarAnimIcon from './tab/component/TabBarAnimIcon'

export default class MainScreen extends Component {
    // static navigationOptions = {
    //     headerLeft: <Icon name='ios-camera' style={{ paddingLeft:10 }}/>,
    //     title: 'Instagram',
    //     headerRight: <Icon name='ios-send' style={{ paddingRight:10 }}/>,
    // }


  render() {
    const { navigation } = this.props;
    const Tab = createMaterialBottomTabNavigator();

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerTitle}>Instagram</Text>
        </View>
        <Tab.Navigator
          initialRouteName="Home"
          // activeColor="#000000"
          // inactiveColor="#aaaaaa"
          shifting={true}
          labeled={false}
          barStyle={styles.tabBar}>
          <Tab.Screen
            name="HomeTab"
            component={HomeTab}
            options={{
              tabBarLabel: 'Home',
              // tabBarBadge: '2',
              tabBarIcon: ({ focused }) => 
                (<TabBarAnimIcon focused={focused}
                    icon={Icon.home}
                    iconAnim={Icon.homeAnim}
                    style={styles.icon}/>),
            }} />
          <Tab.Screen
            name="SearchTab"
            component={SearchTab}
            options={{
              tabBarLabel: 'Search',
              tabBarIcon: ({ focused }) => 
                (<TabBarAnimIcon focused={focused}
                    icon={Icon.search}
                    iconAnim={Icon.searchAnim}
                    style={styles.icon}/>),
            }} />
          <Tab.Screen
            name="AddMediaTab"
            component={AddMediaTab}
            options={{
              tabBarLabel: 'Add',
              tabBarIcon: ({ focused }) => 
                (<TabBarAnimIcon focused={focused}
                    icon={Icon.plus}
                    iconAnim={Icon.plusAnim}
                    style={styles.iconBig}/>),
            }} />
          <Tab.Screen
            name="LikesTab"
            component={LikesTab}
            options={{
              tabBarLabel: 'Likes',
              tabBarIcon: ({ focused }) => 
                (<TabBarAnimIcon focused={focused}
                    icon={Icon.favorite}
                    iconAnim={Icon.favoriteAnim}
                    style={styles.icon}/>),
            }}/>
          <Tab.Screen
            name="SettingsTab"
            component={SettingsTab}
            options={{
              tabBarLabel: 'Settings',
              tabBarIcon: ({ focused }) => 
                (<TabBarAnimIcon focused={focused}
                    icon={Icon.settings}
                    iconAnim={Icon.settingsAnim}
                    style={styles.icon}/>),
            }} />
        </Tab.Navigator>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff"
  },
 
  headerContainer: {
    height: 42,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    marginBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#dedede",
  },

  headerTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black',
  },

  icon: {
    height: 26,
    width: 26,
  },
  iconBig: {
    height: 28,
    width: 28,
  },
  tabBar: {
    backgroundColor: '#ffffff',
    height: 50
  }
});