import { useState } from "react";
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    Image,
    Button,
} from "react-native";
import { StatusBar } from "expo-status-bar";

const Column = () => {
    const [style1, setStyle1] = useState(true);
    const [style2, setStyle2] = useState(false);
    const [style3, setStyle3] = useState(false);

    const handleStyle = (text) => {
        if (text === "style1") {
            setStyle1(true);
            setStyle2(false);
            setStyle3(false);
        } else if (text === "style2") {
            setStyle1(false);
            setStyle2(true);
            setStyle3(false);
        } else {
            setStyle1(false);
            setStyle2(false);
            setStyle3(true);
        }
    };

    const ViewStyle1 = style1 ? (
        <View style={styles.style1Box}>
            <View style={styles.style1Box1} />
            <View style={styles.style1Box2} />
            <View style={styles.style1Box3} />
        </View>
    ) : null;

    const ViewStyle2 = style2 ? (
        <View style={styles.style2Box}>
            <View style={styles.style2Box1} />
            <View style={styles.style2Box2} />
            <View style={styles.style2Box3} />
        </View>
    ) : null;

    const ViewStyle3 = style3 ? (
        <View style={styles.style3Box}>
            <View style={styles.style3Box1} />
            <View style={styles.style3Box2} />
            <View style={styles.style3Box3} />
        </View>
    ) : null;

    return (
        <View style={styles.container}>
            <View style={{ paddingTop: 10, alignItems: "center" }}>
                <Text>Welcome pages Column</Text>
                <Text>Column pages</Text>
            </View>
            <View style={styles.rowButton}>
                <View style={styles.viewButton}>
                    <Button
                        title="Style 1"
                        color="aquamarine"
                        onPress={() => handleStyle("style1")}
                    />
                </View>
                <View style={styles.viewButton}>
                    <Button
                        title="Style 2"
                        color="#c70000"
                        onPress={() => handleStyle("style2")}
                    />
                </View>
                <View style={styles.viewButton}>
                    <Button
                        title="Style 3"
                        color="#bada55"
                        onPress={() => handleStyle("style3")}
                    />
                </View>
            </View>
            {ViewStyle1}
            {ViewStyle2}
            {ViewStyle3}
            <StatusBar style="auto" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    rowButton: { flexDirection: "row" },
    viewButton: { flex: 1, margin: 5 },

    style1Box: {
        flex: 1,
        flexDirection: "column",
    },
    style1Box1: { flex: 1, backgroundColor: "aquamarine" },
    style1Box2: { flex: 1, backgroundColor: "yellow" },
    style1Box3: { flex: 1, backgroundColor: "blue" },

    style2Box: {
        flex: 1,
        flexDirection: "column",
    },
    style2Box1: { flex: 1, backgroundColor: "aquamarine" },
    style2Box2: { flex: 2, backgroundColor: "yellow" },
    style2Box3: { flex: 3, backgroundColor: "blue" },

    style3Box: {
        flex: 1,
        flexDirection: "row",
    },
    style3Box1: { flex: 1, backgroundColor: "aquamarine" },
    style3Box2: { flex: 2, backgroundColor: "yellow" },
    style3Box3: { flex: 3, backgroundColor: "blue" },
});

export default Column;
