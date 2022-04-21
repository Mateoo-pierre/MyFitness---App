import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

//import components
import { Workouts } from '../../components/athlete/Workouts/Workouts';

export const WorkoutsScreen = () => {
    return (
        <View style={styles.container}>
            <Workouts />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        marginTop: 110
    }
})