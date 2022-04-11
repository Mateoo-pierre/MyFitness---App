import React from 'react';
import { View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//import screens
import { HomeScreen } from '../screens/HomeScreen';
import { SearchScreen } from '../screens/SearchScreen';
import { ProfileScreen } from '../screens/ProfileScreen';

//import icons 
import search from '../assets/icons/search.png';
import searchOutline from '../assets/icons/search-outline.png';
import home from '../assets/icons/casa.png';
import homeOutline from '../assets/icons/casa-outline.png';

const Tab = createBottomTabNavigator();

export const Navigation = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        if (route.name === 'home') {
                            iconName = focused ? homeOutline : home
                        }
                        if (route.name === 'search') {
                            iconName = focused ? searchOutline : search;
                        }

                        return <Image source={iconName} style={{ width: 25, height: 25 }} />
                    },
                    tabBarActiveTintColor: '#00DEFF',
                    tabBarInactiveTintColor: 'black'
                })}
            >
                <Tab.Screen
                    name='home'
                    component={HomeScreen}
                />
                <Tab.Screen
                    name='search'
                    component={SearchScreen}
                />
                <Tab.Screen
                    name='profile'
                    component={ProfileScreen}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}