import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

//import components
import { HeaderHome } from '../components/home/HeaderHome';
import { StoriesHome } from '../components/home/StoriesHome';

export const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <HeaderHome />
            <StoriesHome />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        width: '91%',
        marginHorizontal: 20
    }
})