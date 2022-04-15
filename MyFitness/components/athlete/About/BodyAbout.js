import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

//import icons
import { Ionicons } from '@expo/vector-icons';

export const BodyAbout = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Story</Text>
            <Text style={styles.subtitle}>A BRIEF INTRO</Text>
            <Text style={styles.text}>Devon Levesque is an entrepreneur and one of the countrys foremost wellness and fitness experts.
                Founder of DML Holdings - a portofolio of disrupor brands in the wellness category such as Gymshark, 1 Hotels, Arena, Playbook, Super coffe and PromixNutrition.</Text>

            <Text style={styles.title}>Goals</Text>
            <Text style={styles.subtitle}>WHAT I WANT US TO ACCOMPLISH</Text>
            <Text style={styles.text}>- Help you bourn body fat</Text>
            <Text style={{ color: '#00000060' }}>- Help you build a lean, muscular physique</Text>
            <Text style={{ color: '#00000060' }}>- Increase your athleticism</Text>
            <Text style={{ color: '#00000060' }}>- Improve your mindset</Text>
            <Text style={{ color: '#00000060' }}>- Improve your nutrition and eating habits</Text>

            <Text style={styles.title}>Social Media</Text>
            <View style={styles.socialMedia}>
                <TouchableOpacity>
                    <Ionicons style={styles.icon} name="ios-logo-instagram" size={30} color="#0F7DFF" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons style={styles.icon} name="ios-logo-youtube" size={30} color="#0F7DFF" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons style={styles.icon} name="ios-logo-facebook" size={30} color="#0F7DFF" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons style={styles.icon} name="ios-logo-twitter" size={30} color="#0F7DFF" />
                </TouchableOpacity>

            </View>
        </View >
    )
};

const styles = StyleSheet.create({
    title: {
        marginTop: 30,
        fontSize: 22,
        fontWeight: 'bold'
    },

    subtitle: {
        color: '#00000060',
        fontWeight: 'bold'
    },

    text: {
        marginTop: 20,
        color: '#00000060',
    },

    socialMedia: {
        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 20
    },

    icon: {
        marginRight: 30
    }
})