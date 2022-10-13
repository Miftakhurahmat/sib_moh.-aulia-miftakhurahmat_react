import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const Texts = () => {
    const [input, setInput] = useState("");
    return (
        <View style={styles.container}>
            <View style={{ paddingTop: 10, alignItems: "center" }}>
                <Text>Welcome pages Text</Text>
                <Text>Text pages</Text>
            </View>
            <View style={styles.containerTtle}>
                <Text style={styles.title}>React Native</Text>
            </View>
            <TextInput
                style={styles.textInput}
                placeholder="Masukkan text di sini"
                onChangeText={(text) => setInput(text)}
                defaultValue={input}
            />
            <Text style={{ padding: 10, fontSize: 25 }}>
                The text : {input}
            </Text>
            <StatusBar style="auto" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 25,
    },
    textInput: {
        height: 40,
    },
    containerTitle: {
        flex: 1,
        backgroundColor: "#C68B59",
        padding: 25,
    },
    title: {
        marginTop: 16,
        paddingVertical: 8,
        borderWidth: 4,
        borderColor: "#20232a",
        borderRadius: 6,
        backgroundColor: "#61dafb",
        color: "#20232a",
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold",
    },
});

export default Texts;
