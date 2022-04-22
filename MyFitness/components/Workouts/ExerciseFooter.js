import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

//import icons
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export const ExerciseFooter = () => {

    const navigation = useNavigation();

    return (
        <View style={style.container}>
            <Text style={style.reps}>15 Reps</Text>
            <Text style={style.exercise}>ABS BICYCLES</Text>
            <View style={style.containerIcons}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="ios-chevron-down-outline" size={40} color="white" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons style={{ marginLeft: 30 }} name="menu-outline" size={35} color="white" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Feather style={{ marginLeft: 30 }} name="volume-x" size={30} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    )
};

const style = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        marginHorizontal: 20
    },

    reps: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#fff'
    },

    exercise: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFF'
    },

    containerIcons: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 30
    }
})