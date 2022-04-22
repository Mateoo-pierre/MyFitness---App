import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

//import icons
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

//import fake data
import { FakeWorkAthleteData } from '../../../FakeWorkAthleteData';

export const Program = ({ workout }) => {

    const data = FakeWorkAthleteData.filter(e => e.name === workout);

    const navigation = useNavigation();

    const Card = (props) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate('workout')}>
                <View style={style.card}>

                    <Image
                        source={{ uri: props.image }}
                        style={style.image}
                    />
                    <Text style={style.time}>{props.time}</Text>
                    <View>
                        <Text style={style.date}>{props.date}</Text>
                        <Text style={style.name}>{props.name}</Text>
                        <View style={style.icons}>
                            <TouchableOpacity>
                                <Ionicons style={{ marginRight: 20 }} name="md-arrow-down-circle-outline" size={20} color="#0F7DFF" />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Ionicons name="ios-notifications-outline" size={20} color="#0F7DFF" />
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>
            </TouchableOpacity >
        )
    }
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={style.container}>
            <View style={style.cardProgram}>
                <View>
                    <Text style={style.titleProgram}>{data[0]?.program?.title}</Text>
                    <Text style={style.descripProgram}>{data[0]?.program?.descrip}</Text>
                </View>
                <View style={style.iconsProgram}>
                    <TouchableOpacity>
                        <Ionicons style={{ marginRight: 20 }} name="md-arrow-down-circle-outline" size={28} color="#0F7DFF" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <AntDesign name="playcircleo" size={24} color="#0F7DFF" />
                    </TouchableOpacity>
                </View>

            </View>
            {
                data[0]?.training.map(e =>
                    <Card image={e.port} name={e.name} date={e.date} time={e.time} />
                )
            }
        </ScrollView >
    )
};

const style = StyleSheet.create({
    container: {
        height: '72%',
        marginTop: 30
    },

    cardProgram: {
        width: '100%',
        height: 80,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginBottom: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    titleProgram: {
        fontWeight: 'bold',
        marginHorizontal: 15,
        fontSize: 15
    },

    descripProgram: {
        marginTop: 5,
        marginHorizontal: 15,
        color: '#00000090'
    },

    iconsProgram: {
        flexDirection: 'row',
        alignItems: 'center',
        left: -20
    },

    card: {
        width: '100%',
        height: 100,
        borderRadius: 10,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },

    image: {
        width: 80,
        height: 100,
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10,
        marginRight: 25
    },

    time: {
        position: 'absolute',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 11,
        bottom: 5,
        left: 17
    },

    date: {
        fontWeight: 'bold',
        color: '#0F7DFF',
        fontSize: 11
    },

    name: {
        fontWeight: 'bold',
        marginTop: 5,
        fontSize: 15
    },

    icons: {
        flexDirection: 'row',
        marginTop: 15
    }
})