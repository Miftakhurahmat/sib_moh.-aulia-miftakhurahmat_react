import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Column from "../screens/Column";
import FlatlistPage from "../screens/FlatlistPage";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import ScrollviewPage from "../screens/ScrollviewPage";
import Texts from "../screens/Texts";

const Stack = createNativeStackNavigator();

const Router = () => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Page Home" component={Home} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Column" component={Column} />
            <Stack.Screen name="Texts" component={Texts} />
            <Stack.Screen name="Scrollview" component={ScrollviewPage} />
            <Stack.Screen name="Flatlist" component={FlatlistPage} />
        </Stack.Navigator>
    );
};

export default Router;
