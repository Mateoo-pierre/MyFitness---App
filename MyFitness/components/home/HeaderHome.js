import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

//import icons
import { Ionicons } from '@expo/vector-icons';

export const HeaderHome = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Home</Text>
            <View style={styles.containerIcons}>
                <View>
                    <TouchableOpacity>
                        <Ionicons name="notifications-outline" size={24} color="black" />
                        <View style={styles.notification}></View>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity>
                    <Ionicons name="refresh" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons name="settings-outline" size={24} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    containerIcons: {
        width: 110,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    title: {
        fontWeight: 'bold',
        fontSize: 18
    },

    notification: {
        width: 11,
        height: 11,
        borderRadius: 100,
        backgroundColor: 'red',
        position: 'absolute',
        right: 2,
        top: 2,
        borderWidth: 3,
        borderColor: '#EFEFEF'
    }
})