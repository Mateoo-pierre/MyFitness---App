import React from 'react';
import { View, ScrollView, Text, TouchableOpacity, StyleSheet } from 'react-native';

export const ExploreTags = (porps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{porps.title}</Text>
            <ScrollView
                style={styles.containerTags}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                {
                    porps.items.map(e =>
                        <TouchableOpacity>
                            <Text style={styles.text}>{e}</Text>
                        </TouchableOpacity>
                    )
                }
            </ScrollView>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        marginTop: 20
    },

    title: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#00000070'
    },

    containerTags: {
        marginTop: 20,
        marginBottom: 20,
        width: '105%'
    },

    text: {
        fontSize: 15,
        color: '#0F7DFF',
        fontWeight: 'bold',
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 30,
        borderColor: '#0F7DFF',
        marginRight: 20
    }
})