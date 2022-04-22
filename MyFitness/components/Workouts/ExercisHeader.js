import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

//imort icon
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export const ExerciseHeader = () => {
    return (
        <View style={style.container}>
            <View style={style.containerBar}>
                <View style={style.barExerciseActive} />
                <View style={style.barExercise} />
                <View style={style.barExercise} />
            </View>
            <View style={style.containerRounds}>
                <Text style={style.exeNum}>1</Text>
                <View style={style.exeNumBorder} />
                <AntDesign name="retweet" size={24} color="white" />
                <Text style={style.rounds}>3 rounds</Text>
                <View style={style.resetContainer}>
                    <Ionicons name="md-timer-outline" size={20} color="white" />
                    <Text style={style.restText}>REST</Text>
                </View>
            </View>
        </View>
    )
};

const style = StyleSheet.create({
    container: {
        position: 'absolute',
    },

    containerBar: {
        flexDirection: 'row',
        marginHorizontal: 10,
        marginTop: 20

    },

    barExercise: {
        width: 110,
        height: 3,
        marginHorizontal: 10,
        borderRadius: 100,
        backgroundColor: '#ffffff90'
    },

    barExerciseActive: {
        width: 110,
        height: 3,
        marginHorizontal: 10,
        borderRadius: 100,
        backgroundColor: '#fff'
    },

    containerRounds: {
        flexDirection: 'row',
        marginHorizontal: 20,
        marginTop: 20
    },

    exeNum: {
        color: '#fff',
        fontWeight: 'bold',
        marginRight: 30,
        marginLeft: 8,
        top: 1
    },

    exeNumBorder: {
        width: 25,
        height: 25,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: '#fff',
        position: 'absolute',
        left: 0
    },

    rounds: {
        color: '#fff',
        fontWeight: 'bold',
        marginHorizontal: 10
    },

    resetContainer: {
        flexDirection: 'row',
        width: 80,
        height: 30,
        borderRadius: 4,
        backgroundColor: '#ffffff80',
        alignItems: 'center',
        justifyContent: 'center',
        right: 0,
        top: -5,
        position: 'absolute'
    },

    restText: {
        color: '#fff',
        fontWeight: 'bold',
        marginLeft: 5,
        fontSize: 11
    }
})  