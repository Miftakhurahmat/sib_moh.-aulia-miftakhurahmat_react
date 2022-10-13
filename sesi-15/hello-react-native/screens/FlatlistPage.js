import { StatusBar } from "expo-status-bar";
import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

const FlatlistPage = () => {
    let posts = [];

    for (let i = 1; i <= 20; i++) {
        posts.push({
            title: `Title ${i}`,
        });
    }
    return (
        <View style={styles.container}>
			<View style={{ paddingTop: 10, alignItems: "center" }}>
                <Text>Welcome pages FlatList</Text>
                <Text>FlatList pages</Text>
            </View>
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

export default FlatlistPage;
