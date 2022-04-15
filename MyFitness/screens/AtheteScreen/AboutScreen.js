import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { BodyAbout } from '../../components/athlete/About/BodyAbout';

//import components
import { HeaderAbout } from '../../components/athlete/About/HeaderAbout';

export const AboutScreen = () => {
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            <HeaderAbout />
            <BodyAbout />
        </ScrollView >
    )
};

const styles = StyleSheet.create({
    container: {
        marginTop: 110
    }
})