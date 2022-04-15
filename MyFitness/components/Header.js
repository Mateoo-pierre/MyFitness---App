import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

//import icons
import { Ionicons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';

export const Header = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
            {/* <View style={styles.backgTitle} /> */}
            <View style={styles.containerIcons}>
                <View>
                    <TouchableOpacity>
                        <Ionicons name="notifications-outline" size={24} color="black" />
                        <View style={styles.notification}></View>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity>
                    <EvilIcons name="search" size={30} color="black" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        source={{ uri: 'https://lh3.googleusercontent.com/a-/AOh14Gj4Uz2MMMSVdiAl2ibMgqKfJNL4YfVsjROWSatMyQ=s288-p-no' }}
                        style={styles.image}
                    />
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

    image: {
        width: 24,
        height: 24,
        borderRadius: 100
    },

    title: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#000',
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