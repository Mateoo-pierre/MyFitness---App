import React from 'react';
import { View, Text, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//import screens
import { AboutScreen } from '../screens/AtheteScreen/AboutScreen';
import { WorkoutsScreen } from '../screens/AtheteScreen/WorkoutsScreen';
import { InsigthsScreen } from '../screens/AtheteScreen/InsigthsScren'



const Tab = createBottomTabNavigator();

export const Navigation = () => {

    return (
        <View style={{ flex: 1 }}>


            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarStyle: {
                        backgroundColor: 'transparent',
                        shadowColor: 'transparent',
                        top: 10,
                        position: 'absolute',
                        borderTopColor: 'transparent',
                        justifyContent: 'center',
                    },
                    tabBarIconStyle: {
                        position: 'absolute'
                    },
                    tabBarLabelStyle: {
                        fontSize: 15,
                        fontWeight: 'bold',
                    },
                    tabBarInactiveTintColor: '#000',


                })}
            >
                <Tab.Screen
                    name='About'
                    component={AboutScreen}
                    options={{
                        headerShown: false
                    }}
                />
                <Tab.Screen
                    name='Workouts'
                    component={WorkoutsScreen}
                    options={{
                        headerShown: false
                    }}
                />
                <Tab.Screen
                    name='Insigths'
                    component={InsigthsScreen}
                    options={{
                        headerShown: false
                    }}
                />

            </Tab.Navigator>
        </View>
    )
}