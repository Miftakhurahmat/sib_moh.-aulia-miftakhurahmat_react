import React from "react";
import { StyleSheet, View } from "react-native";

const Flexbox3 = () => {
    return (
        <View style={styles.container}>
            <View style={styles.box1} />
            <View style={styles.box2} />
            <View style={styles.box3} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        paddingTop: 25,
    },
    box1: {
        flex: 1,
        backgroundColor: "red",
    },
    box2: {
        flex: 2,
        backgroundColor: "yellow",
    },
    box3: {
        flex: 3,
        backgroundColor: "green",
    },
});

export default Flexbox3;
