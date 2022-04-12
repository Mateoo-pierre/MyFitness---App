import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';

//import components
import { Stories } from '../Stories';

//import icons
import { Ionicons } from '@expo/vector-icons';

//import data
import { FakeProfileData } from '../../FakeProfilesData';

export const StoriesHome = () => {
    return (
        <View style={styles.containerStories}>
            <View style={styles.containerUser}>
                <View style={styles.User}>
                    <Image
                        source={{ uri: 'https://lh3.googleusercontent.com/a-/AOh14Gj4Uz2MMMSVdiAl2ibMgqKfJNL4YfVsjROWSatMyQ=s288-p-no' }}
                        style={styles.image}
                    />
                    <View style={styles.online}></View>
                    <Ionicons name="add-outline" size={24} color="black" />
                </View>
                <Text style={styles.text}>You</Text>
            </View>
            <View style={styles.containerUsers} >
                <Stories data={FakeProfileData} />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    containerStories: {
        flexDirection: 'row',
        marginTop: 35,
    },

    containerUser: {
        width: 80,
        textAlign: 'center'
    },

    containerUsers: {
        width: '83%'
    },

    image: {
        width: 40,
        height: 40,
        borderRadius: 100,
        marginRight: 5
    },

    online: {
        width: 13,
        height: 13,
        borderRadius: 100,
        backgroundColor: '#0F7DFF',
        position: 'absolute',
        borderWidth: 3,
        borderColor: 'white',
        bottom: 5,
        right: 29
    },

    User: {
        width: 80,
        height: 50,
        backgroundColor: 'white',
        borderRadius: 30,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center'
    },

    text: {
        textAlign: 'center',
        fontSize: 12,
        fontWeight: 'bold'
    }
}) 