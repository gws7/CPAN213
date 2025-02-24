import {Text, View, StyleSheet, TouchableOpacity, Alert, TextInput, FlatList} from "react-native";
import { useState } from "react";
import * as Progress from "react-native-progress";

const Scoreboard = ({route}) => {

    const {guess} = route.params

    return(
        <View>
             {/* <FlatList 
                data={guess} 
                keyExtractor={ ({id}) => id.toString() }
                renderItem={ ({item}) => ( /> */}
        </View>
    )
}

export default Scoreboard