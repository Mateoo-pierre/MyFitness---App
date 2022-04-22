import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export const Exercise = () => {
    return (
        <View style={style.container}>
            <Image
                source={{ uri: 'https://d3l5vala1x2h4r.cloudfront.net/1528387108015_1528387105.89498-output-compressed.-shot.jpg' }}
                style={style.imageBackg}
            />
        </View>
    )
};

const style = StyleSheet.create({
    imageBackg: {
        height: '100%',
        width: '100%',
    }
})