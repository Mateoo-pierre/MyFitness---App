import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

//import components
import { Header } from '../components/Header';
import { HeaderAthlete } from '../components/athlete/HeaderAthlete';
import { Navigation } from '../components/Navigation';

export const AthleteScreen = () => {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Header title={
                <TouchableOpacity onPress={() => navigation.goBack()} style={{ width: 30, height: 30, backgroundColor: 'transparent' }}>
                    <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
            } />
            <HeaderAthlete />
            <Navigation />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '91%',
        marginHorizontal: 20,
    }
})
