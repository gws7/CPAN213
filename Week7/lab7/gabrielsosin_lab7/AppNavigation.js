import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

// Area for screen imports
import Home from "./screens/Home";
import Converter from "./screens/Converter";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{
                    headerTitleAlign: "center",
                    headerStyle: {
                        backgroundColor: "#1a1a2e",
                    },
                    headerTintColor: "#e94560",
                    headerTitleStyle: {
                        fontSize: 20,
                        fontWeight: "600",
                        letterSpacing: 0.5,
                    },
                    headerShadowVisible: false,
                    animation: "slide_from_right",
                }}
            >
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="Converter"
                    component={Converter}
                    options={{
                        headerShown: false
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
