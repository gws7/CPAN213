import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import HomeScreen from "../screens/HomeScreen";
import MissionDetailsScreen from "../screens/MissionDetailsScreen";
import FavoritesScreen from "../screens/FavoritesScreen";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{
                    headerStyle: {
                        backgroundColor:"red",
                    },
                    headerTintColor:"white",
                    headerTitleStyle: {
                        fontWeight:"bold"
                    }
                }}
            >
                <Stack.Screen 
                    name="Home" 
                    component={HomeScreen}
                    options={{
                        title: "Home"
                    }}
                />
                <Stack.Screen 
                    name="MissionDetails" 
                    component={MissionDetailsScreen}
                    options={{
                        title: "Mission Details"
                    }}
                />
                <Stack.Screen 
                    name="Favorites" 
                    component={FavoritesScreen}
                    options={{
                        title: "Favorites"
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator;