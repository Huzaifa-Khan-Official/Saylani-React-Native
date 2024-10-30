import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

const Home = () => {
    return (
        <View style={styles.container}>
            <LinearGradient colors={["rgba(245, 49, 63, 1)", "rgba(255, 163, 96, 1)"]} style={styles.bannerDiv}>
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
    },
    card: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
    },
    reorderDiv: {
        flex: 0.3,
        backgroundColor: 'blue',
    },
    createPizzaDiv: {
        flex: 0.3,
        backgroundColor: 'green',
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
