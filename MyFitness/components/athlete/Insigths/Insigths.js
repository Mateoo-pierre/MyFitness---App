import React from 'react';
import { Image, View, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

//import data
import { FakeInsAthleteData } from '../../../FakeInsAthleteData'

export const Insigths = () => {

    const Card = (props) => {
        return (
            <View>
                <TouchableOpacity>
                    <Image
                        source={{ uri: props.image }}
                        style={style.image}
                    />
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View>
            <FlatList
                data={FakeInsAthleteData}
                renderItem={({ item }) => <Card image={item.image} />}
                keyExtractor={(item, index) => index.toString()}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
};

const style = StyleSheet.create({
    image: {
        width: '100%',
        height: 150,
        marginVertical: 15,
        borderRadius: 10
    }
})