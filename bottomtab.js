import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Facebook from './fb';
import Instagram from './in';

const Tab = createBottomTabNavigator()
export default class BottomTab extends React.Component {
    render() {
        return (<View >
      
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name="facebook" component={Facebook} />
                    <Tab.Screen name="instagram" component={Instagram} />
                </Tab.Navigator>
            </NavigationContainer>
        </View>)
    }
}