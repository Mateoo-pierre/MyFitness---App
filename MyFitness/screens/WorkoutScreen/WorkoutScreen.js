import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Exercise } from '../../components/Workouts/Exercise';
import { ExerciseFooter } from '../../components/Workouts/ExerciseFooter';
import { ExerciseHeader } from '../../components/Workouts/ExercisHeader';

export const WorkoutScreen = () => {
    return (
        <View style={style.container}>
            <Exercise />
            <ExerciseHeader />
            <ExerciseFooter />
        </View>
    )
};

const style = StyleSheet.create({

})