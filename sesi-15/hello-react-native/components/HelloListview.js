import { StatusBar } from "expo-status-bar";
import React from "react";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";

const HelloListview = () => {
    let posts = [];

    for (let i = 1; i <= 20; i++) {
        posts.push({
            title: `Title ${i}`,
        });
    }
    return (
        <View style={styles.container}>
            <FlatList
                data={posts}
                renderItem={({ item }) => (
                    <Text style={styles.item}>{item.title}</Text>
                )}
            />
            <StatusBar style="auto" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 25,
    },
    item: {
        padding: 10,
        fontSize: 20,
        height: 50,
    },
});

export default HelloListview;
