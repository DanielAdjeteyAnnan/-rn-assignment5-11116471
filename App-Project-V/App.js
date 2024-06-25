import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {HomeScreen} from './components/homeScreen';
import {SettingsScreen} from './components/settings';
import {MyCardScreen} from './components/cardsScreen';
import {StatisticsScreen} from './components/statistics'

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>

        <Tab.Navigator>
        <Tab.Screen
          name="Home" component={HomeScreen} options={{ headerShown: false,tabBarLabel: 'Home',
            tabBarIcon: ({color, size}) => (
              <Image source={require('./assets/images/home.png')} style={{ width: size, height: size, tintColor: color }}/>),
          }}
        />

        <Tab.Screen
          name="Card"component={MyCardScreen} options={{ headerShown: false, tabBarLabel: 'My Card',
            tabBarIcon: ({color, size}) => (
              <Image source={require('./assets/images/myCards.png')} style={{ width: size, height: size, tintColor: color }} />), 
           }} 
           />
          

        <Tab.Screen
          name="statistics"component={StatisticsScreen} options={{ headerShown: false, tabBarLabel: 'Statistics',
            tabBarIcon: ({color, size}) => (
              <Image source={require('./assets/images/statictics.png')}style={{ width: size, height: size, tintColor: color }} />), 
           }} 
           />

        <Tab.Screen
          name="Settings"component={SettingsScreen} options={{ headerShown: false, tabBarLabel: 'Settings',
            tabBarIcon: ({color, size}) => (
              <Image source={require('./assets/images/settings.png')} style={{ width: size, height: size, tintColor: color }} />), 
           }}
            />

        </Tab.Navigator>
        <StatusBar style="auto" />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});
