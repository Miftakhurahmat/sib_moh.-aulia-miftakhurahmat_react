import { StatusBar } from "expo-status-bar";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const HelloScrollview = () => {
    let posts = [];

    for (let i = 1; i <= 10; i++) {
        posts.push({
            title: `Title ${i}`,
            description: `Deskripsi untuk title ${i}`,
        });
    }
    return (
        <View style={styles.container}>
            <ScrollView style={styles.scroll}>
                {posts.map((post, idx) => (
                    <View style={styles.box} key={idx}>
                        <Text style={styles.title}>{post.title}</Text>
                        <Text>{post.description}</Text>
                    </View>
                ))}
            </ScrollView>
            <StatusBar style="auto" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 25,
    },
    scroll: {
        backgroundColor: "#C2B8A3",
        padding: 10,
    },
    box: {
        backgroundColor: "#FEF7DC",
        marginBottom: 10,
        padding: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
    },
});

export default HelloScrollview;
