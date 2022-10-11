import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const HelloHandlingTextInput = () => {
    const [input, setInput] = useState("");
    return (
        <View style={styles.container}>
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
});

export default HelloHandlingTextInput;
