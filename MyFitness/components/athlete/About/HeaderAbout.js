import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

//import component
import { ExploreTags } from '.././../ExploreTags'

export const HeaderAbout = () => {
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: 'https://craftcms-assets.playbookapp.io/creators/premium/devon-levesque-app/_768x960_crop_center-center_none/devon-6_2021-07-19-232126.jpg' }}
                style={styles.image}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    image: {
        width: 80,
        height: 80,
        borderRadius: 10
    },
})