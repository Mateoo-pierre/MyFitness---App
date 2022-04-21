import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

//import component
import { Insigths } from '../../components/athlete/Insigths/Insigths';

export const InsigthsScreen = () => {
    return (
        <View style={styles.container}>
            <Insigths />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        marginTop: 110
    }
})