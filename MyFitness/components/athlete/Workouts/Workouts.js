import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

//import components
import { Program } from './Program';

//import fake data
import { FakeWorkAthleteData } from '../../../FakeWorkAthleteData';

export const Workouts = () => {

    const [workout, setWorkout] = React.useState('66 DAYS OF ABS');

    const handleWorkout = (e) => {
        setWorkout(e)
    };

    const Story = (props) => {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => handleWorkout(props.name)} >
                    <Image
                        source={{ uri: props.image }}
                        style={{
                            width: 80,
                            height: 80,
                            borderRadius: 100,
                            top: 5
                        }}
                    />
                    <View style={{
                        width: 90,
                        height: 90,
                        borderColor: '#0F7DFF',
                        borderRadius: 100,
                        borderWidth: 1,
                        borderStyle: 'dashed',
                        position: 'absolute',
                    }} />
                    <Text style={styles.text}>{props.name}</Text>
                    {
                        console.log(workout)
                    }
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View>
            <FlatList
                data={FakeWorkAthleteData}
                renderItem={({ item }) => <Story image={item.image} name={item.name} />}
                keyExtractor={(item, index) => index.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
            <Program workout={workout} />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 15,
    },

    text: {
        textAlign: 'center',
        maxWidth: 70,
        height: 50,
        top: 11,
        fontWeight: 'bold'
    }
})