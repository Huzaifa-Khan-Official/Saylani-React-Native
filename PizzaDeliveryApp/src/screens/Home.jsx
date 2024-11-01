import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

const Home = () => {
    return (
        <View style={styles.container}>
            <LinearGradient colors={["rgba(245, 49, 63, 1)", "rgba(255, 163, 96, 1)"]} style={styles.bannerDiv}
                start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
            >
                <Text>
                    Hi Jaykey!
                </Text>
                <Text style={styles.bannerTextDiv}>
                    What <Text style={styles.fontBold}>pizza</Text> do you want to try today?
                </Text>
            </LinearGradient>
            <View style={[styles.card, styles.reorderDiv]}>

            </View>
            <View style={[styles.card, styles.createPizzaDiv]}>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bannerDiv: {
        flex: 0.2,
        zIndex: 1,
    },
    // card: {
    //     shadowColor: "#000",
    //     shadowOpacity: 1,
    //     shadowRadius: 1,
    //     elevation: 15,
    // },
    card: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius: 6,
    },
    reorderDiv: {
        flex: 0.4,
        position: 'relative',
        top: -30,
        marginHorizontal: 10,
        zIndex: 2
    },
    createPizzaDiv: {
        flex: 0.4,
        marginHorizontal: 10,
    },
    fontBold: {
        fontWeight: 'bold',
    },
    bannerTextDiv: {
        borderRightWidth: 2,
        borderColor: "white",
        color: "white",
    }
})

export default Home
