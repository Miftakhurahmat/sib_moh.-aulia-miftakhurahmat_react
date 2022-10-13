import React from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";

const Home = ({ navigation }) => {
    return (
        <View style={styles.container1}>
            <Text style={styles.title}>Welcome Page Home</Text>
            <Text style={styles.title}>Hello World</Text>
            <View style={styles.container2}>
                <TouchableHighlight style={[styles.button, styles.button1]}>
                    <Text
                        style={styles.text}
                        onPress={() => navigation.navigate("Profile")}
                    >
                        Profile
                    </Text>
                </TouchableHighlight>
                <TouchableHighlight style={[styles.button, styles.button2]}>
                    <Text
                        style={styles.text}
                        onPress={() => navigation.navigate("Texts")}
                    >
                        Text
                    </Text>
                </TouchableHighlight>
                <TouchableHighlight style={[styles.button, styles.button3]}>
                    <Text
                        style={styles.text}
                        onPress={() => navigation.navigate("Column")}
                    >
                        Column
                    </Text>
                </TouchableHighlight>
            </View>
            <View style={styles.container3}>
                <TouchableHighlight style={[styles.button, styles.button4]}>
                    <Text
                        style={styles.text}
                        onPress={() => navigation.navigate("Scrollview")}
                    >
                        Scrollview
                    </Text>
                </TouchableHighlight>
                <TouchableHighlight style={[styles.button, styles.button5]}>
                    <Text
                        style={styles.text}
                        onPress={() => navigation.navigate("Flatlist")}
                    >
                        Flatlist
                    </Text>
                </TouchableHighlight>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container1: {
        flex: 1,
        margin: "auto",
        alignItems: "center",
        justifyContent: "center",
    },
    container2: {
        flexDirection: "row",
        marginBottom: 10,
    },
    container3: {
        flexDirection: "row",
    },
    button: {
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        width: 150,
        height: 50,
        marginHorizontal: 5,
    },
    title: {
        marginBottom: 10,
    },
    text: {
        fontSize: 12,
        lineHeight: 21,
        fontWeight: "bold",
        letterSpacing: 0.25,
        color: "white",
    },
    button1: {
        backgroundColor: "red",
    },
    button2: {
        backgroundColor: "blue",
    },
    button3: {
        backgroundColor: "green",
    },
    button4: {
        backgroundColor: "orange",
        width: 230,
    },
    button5: {
        backgroundColor: "aquamarine",
        width: 230,
    },
});

export default Home;
