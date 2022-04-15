import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export const NutritionHome = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Nutrition</Text>
            <View style={styles.containerCards}>
                <TouchableOpacity>
                    <View style={styles.card}>
                        <Image
                            source={{ uri: 'https://www.thespruceeats.com/thmb/cO72JFFH0TCAufENSxUfqE8TmKw=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/vegan-tofu-tikka-masala-recipe-3378484-hero-01-d676687a7b0a4640a55be669cba73095.jpg' }}
                            style={styles.image}
                        />
                        <Text style={styles.text}>Recipe Guide</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.card}>
                        <Image
                            source={{ uri: 'https://imageio.forbes.com/specials-images/imageserve/1155044772/Vegan-tortilla-wraps-with-quinoa--asparagus--beans--vegetables-and-guacamole-/960x0.jpg?fit=bounds&format=jpg&width=960' }}
                            style={styles.image}
                        />
                        <Text style={styles.text}>Vegan Food Guide</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.containerCards}>
                <TouchableOpacity>
                    <View style={styles.card}>
                        <Image
                            source={{ uri: 'https://assets.afcdn.com/story/20180709/1251807_w1254h836cx624cy415.jpg' }}
                            style={styles.image}
                        />
                        <Text style={styles.text}>Volume Guide</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.card}>
                        <Image
                            source={{ uri: 'https://media.istockphoto.com/photos/woman-hands-eating-vegan-salad-of-baked-vegetables-avocado-tofu-and-picture-id1293479617?k=20&m=1293479617&s=170667a&w=0&h=8V1mneujfWRsLk1WAKTMo74s8vgSUJXXTYh0QGXf5L8=' }}
                            style={styles.image}
                        />
                        <Text style={styles.text}>Prenatal Guide</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        marginTop: 20
    },

    containerCards: {
        marginTop: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    card: {
        width: 170,
        height: 60,
        borderRadius: 6,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10
    },

    image: {
        width: 60,
        height: 60,
        borderBottomLeftRadius: 6,
        borderTopLeftRadius: 6
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
    },
    text: {
        fontSize: 14,
        fontWeight: 'bold',
        maxWidth: 100,
        textAlign: 'left',
        marginLeft: 10
    },
})