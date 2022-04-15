import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

//import components
import { Stories } from '../../Stories'

//import fake data
import { FakeWorkAthleteData } from '../../../FakeWorkAthleteData'

export const StoriesWorkouts = () => {
    return (
        <View>
            <Stories data={FakeWorkAthleteData} width={80} />
        </View>
    )
};

const styles = StyleSheet.create({

})