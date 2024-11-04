import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

const Home = () => {
    return (
        <View style={styles.container}>
            <LinearGradient
                start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                colors={["rgba(245, 49, 63, 1)", "rgba(255, 163, 96, 1)"]}
                style={styles.bannerDiv}
            >
                <Text style={styles.titleText}>
                    Hi Jaykey!
                </Text>
                <Text style={styles.bannerTextDiv}>
                    What <Text style={styles.fontBold}>pizza</Text> do you want to try today?
                </Text>
            </LinearGradient>
            <View style={[styles.card, styles.reorderDiv]}>
                <View style={styles.ImageDiv}>
                    <Image
                        source={require("../assets/pizzaImage.png")}
                        style={styles.pizzaImage}
                    />
                </View>
                <View style={styles.TextDiv}>
                    <Text style={styles.reorderText}>
                        Reorder again?
                    </Text>
                    <Text style={styles.text2}>
                        Small, thin crust, tomatoes, basil, cheese
                    </Text>
                    <Text style={styles.prizeText}>
                        $12
                    </Text>
                    <LinearGradient
                        start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                        colors={["rgba(245, 49, 63, 1)", "rgba(255, 163, 96, 1)"]}
                        style={styles.btnDiv}
                    >
                        <TouchableOpacity>
                            <Text style={styles.btnText}>
                                Add To Cart
                            </Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>
            </View>
            <View style={[styles.card, styles.createPizzaDiv]}>
                <View style={styles.createPizzaTextView}>
                    <Text style={styles.createPizza1stText}>
                        Create your <Text style={styles.fontBold}>own pizza</Text>
                    </Text>
                    <Text style={styles.createPizza2ndText}>
                        The cost will depend on your customization
                    </Text>
                </View>
                <View style={styles.createPizzaImageView}>
                    <Image
                        style={styles.createPizzaImage}
                        source={require("../assets/pizzaImage.png")}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    titleText: {
        fontSize: 28,
        color: "white",
        fontWeight: "bold",
    },
    bannerDiv: {
        flex: 0.2,
        zIndex: 1,
        paddingHorizontal: 20,
        gap: 8,
        paddingTop: 24,
    },
    card: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 20,
        borderRadius: 20,
        backgroundColor: "white"
    },
    reorderDiv: {
        flex: 0.4,
        position: 'relative',
        top: -30,
        marginHorizontal: 14,
        zIndex: 2,
        flexDirection: "row",
        overflow: "hidden",
        gap: 20
    },
    createPizzaDiv: {
        flex: 0.4,
        marginHorizontal: 10,
        paddingVertical: 10,
        marginBottom: 20
    },
    fontBold: {
        fontWeight: 'bold',
    },
    bannerTextDiv: {
        borderLeftWidth: 2,
        paddingHorizontal: 20,
        fontSize: 22,
        borderColor: "white",
        color: "white",
        marginBottom: 10,
    },
    ImageDiv: {
        flex: 0.5,
    },
    pizzaImage: {
        width: "120%",
        height: "90%",
        alignItems: "center",
        objectFit: "contain",
        position: "relative",
        right: 20,
    },
    TextDiv: {
        flex: 0.5,
        justifyContent: "center",
        gap: 6
    },
    reorderText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "red"
    },
    text2: {
        fontSize: 14,
        color: "rgba(109, 110, 156, 1)",
        textTransform: "uppercase"
    },
    prizeText: {
        color: "rgba(109, 110, 156, 1)",
        fontSize: 18,
        fontWeight: "bold"
    },
    btnDiv: {
        width: "90%",
        borderRadius: 20,
        paddingHorizontal: 10,
        paddingVertical: 8,
        justifyContent: "center",
        alignItems: "center",
    },
    btnText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold"
    },
    createPizzaTextView: {
        justifyContent: "center",
        alignItems: "center"
    },
    createPizza1stText: {
        fontSize: 24,
        color: "red"
    },
    createPizza2ndText: {
        fontSize: 14,
        color: "rgba(109, 110, 156, 1)"
    },
    createPizzaImageView: {
        alignItems: "center",
        paddingVertical: 10,
    },
    createPizzaImage: {
        width: 210,
        height: 210
    }
})

export default Home
