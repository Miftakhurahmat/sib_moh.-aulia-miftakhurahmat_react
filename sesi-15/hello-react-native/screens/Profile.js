import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const MarginTop = () => <View style={{ marginTop: 10 }} />;
const Profile = ({ route }) => {
    return (
        <View style={styles.container}>
            <View style={{ alignItems: "center" }}>
                <Text style={styles.text}>Welcome to page Profile</Text>
            </View>
            <MarginTop />
            <Image
                source={{
                    uri: "https://c4.wallpaperflare.com/wallpaper/409/952/920/dragon-ball-z-son-goku-portrait-display-wallpaper-preview.jpg",
                }}
                style={{ width: 400, height: 400 }}
            />
            <View style={{ alignItems: "center" }}>
                <Text style={{ fontSize: 15 }}>Moh. Aulia Miftakhurahmat</Text>
                <Text style={{ fontSize: 15 }}>RCTN-KS05-021</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: 30,
    },
});

export default Profile;
