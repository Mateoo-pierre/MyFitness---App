import React from 'react';
import { Text, View, TouchableOpacity, Image, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

//import data
import { FakeAthletesData } from '../../FakeAthletesData'

export const AthletesHome = () => {

    const navigation = useNavigation();

    const Card = (porps) => {
        if (porps.name === 'DEVON LEVESQUE') {
            return (
                <TouchableOpacity onPress={() => navigation.navigate('athlete')}>
                    <View style={styles.containerCard}>
                        <Image
                            source={{ uri: porps.image }}
                            style={styles.image}
                        />
                        <Text style={styles.text}>{porps.name}</Text>
                    </View>
                </TouchableOpacity>
            )
        }
        return (
            <TouchableOpacity >
                <View style={styles.containerCard}>
                    <Image
                        source={{ uri: porps.image }}
                        style={styles.image}
                    />
                    <Text style={styles.text}>{porps.name}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Athletes</Text>
            <View style={styles.containerAthletes} >
                <FlatList
                    data={FakeAthletesData}
                    renderItem={({ item }) => <Card name={item.name} image={item.image} />}
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

    containerAthletes: {
        marginTop: 20,
        width: '105%'
    },

    containerCard: {
        marginRight: 20,
        alignItems: 'center'
    },

    image: {
        width: 150,
        height: 200,
        borderRadius: 6
    },

    text: {
        fontSize: 14,
        fontWeight: 'bold'
    }
})