import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export const HeaderAthlete = () => {
    return (
        <View>
            <Text style={styles.title}>Devon Levesque</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 30,
        color: '#0F7DFF'
    },
})