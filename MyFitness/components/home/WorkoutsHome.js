import React from 'react';
import { Text, View, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';

//import data
import { FakeWorkoutsData } from '../../FakeWorkoutsData'

export const WorkoutsHome = () => {

    const Crad = (props) => {
        return (
            <TouchableOpacity>
                <View style={styles.workContainer}>
                    <Image
                        source={{ uri: props.image }}
                        style={styles.image}
                    />
                    <Text style={styles.text}>{props.name}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Workout</Text>
            <View style={styles.workouts}>
                <FlatList
                    data={FakeWorkoutsData}
                    renderItem={({ item }) => <Crad name={item.name} image={item.image} />}
                    keyExtractor={(s, index) => index.toString()}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
    },

    workContainer: {
        alignItems: 'center',
        marginRight: 20
    },

    workouts: {
        marginTop: 20,
        width: '105%'
    },

    image: {
        width: 150,
        height: 150,
        borderRadius: 6
    },

    text: {
        marginTop: 5,
        fontSize: 14,
        fontWeight: 'bold',
    }
})
