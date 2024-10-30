import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Home = () => {
    return (
        <View style={styles.container}>
            <View style={styles.bannerDiv}>

            </View>
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
        backgroundColor: 'red',
    },
    card: {},
    reorderDiv: {
        flex: 0.3,
        backgroundColor: 'blue',
    },
    createPizzaDiv: {
        flex: 0.3,
        backgroundColor: 'green',
    }
})

export default Home
