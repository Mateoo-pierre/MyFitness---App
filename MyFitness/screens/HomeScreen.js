import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { ExploreTags } from '../components/ExploreTags';
import { AthletesHome } from '../components/home/AthletesHome';

//import components
import { Header } from '../components/Header';
import { NutritionHome } from '../components/home/NutritionHome';
import { StoriesHome } from '../components/home/StoriesHome';
import { WorkoutsHome } from '../components/home/WorkoutsHome';

export const HomeScreen = () => {

    const tags = ['6-PACK', 'ABASANA', 'ABS', 'ABS AND CORE', 'LEGS', 'SUMMER', 'HOME'];

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
        >
            <View style={styles.container}>
                <Header title={'Home'} />
                <StoriesHome />
                <NutritionHome />
                <WorkoutsHome />
                <AthletesHome />
                <ExploreTags items={tags} title={'EXPLORE BY TAGS'} />
            </View>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    container: {
        width: '91%',
        marginHorizontal: 20,
    }
})