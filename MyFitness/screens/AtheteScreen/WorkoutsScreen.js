import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

//import components
import { StoriesWorkouts } from '../../components/athlete/Workouts/StoriesWorkout';

export const WorkoutsScreen = () => {
    return (
        <View style={styles.container}>
            <StoriesWorkouts />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        marginTop: 110
    }
})