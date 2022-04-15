import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

export const Stories = ({ data }) => {

    const Story = (props) => {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={{ alignItems: 'center' }}>
                    <Image
                        source={{ uri: props.image }}
                        style={styles.image}
                    />
                    <View style={styles.border} />
                    <Text style={styles.text}>{props.name}</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View>
            <FlatList
                data={data}
                renderItem={({ item }) => <Story image={item.image} name={item.name} />}
                keyExtractor={(item, index) => index.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 15
    },

    image: {
        width: 40,
        height: 40,
        borderRadius: 100,
        top: 5
    },

    border: {
        width: 50,
        height: 50,
        borderColor: '#0F7DFF',
        borderRadius: 100,
        borderWidth: 1,
        borderStyle: 'dashed',
        position: 'absolute',
    },

    text: {
        textAlign: 'center',
        maxWidth: 70,
        height: 50,
        top: 11,
        fontWeight: 'bold'
    }
})