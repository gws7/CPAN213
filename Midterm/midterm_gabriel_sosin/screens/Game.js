import {Text, View, StyleSheet, TouchableOpacity, Alert,} from "react-native";
import { useState } from "react";
import * as Progress from "react-native-progress";

const wordSets = [
    { options: ["Dog", "Cat", "Parrot", "Car"], oddOne: "Car" },
    { options: ["Milk", "Juice", "Water", "Laptop"], oddOne: "Laptop" },
    { options: ["Car", "Bike", "Bus", "Giraffe"], oddOne: "Giraffe" },
    { options: ["Sun", "Moon", "Star", "Boat"], oddOne: "Boat" },
    { options: ["Blue", "Red", "Green", "Table"], oddOne: "Table" }
];

const Game = ({navigation}) => {

    const [progress, setProgress] = useState(0);
    const [round, setRound] = useState(0);
    const [guess, setGuess] = useState([]);

    const scoreboardScreen = () => {
        navigation.navigate("Scoreboard", {guess})
    }

    const guessCheck = () => {

        console.log(round, wordSets.length)
        //Increment round to change list with each guess
        if (round <= 3) {
            setRound(round + 1)
            setProgress(round/4)            
        } else {
            setProgress(1)
            Alert.alert("You have gone through all tables")
        }
        
    }

    return(
        <View>

            <View style={styles.textIntro}>
                <Text>Gabriel Sosin</Text>
                <Text>N01646959</Text>
            </View>

            <Text style={styles.title}>Guess the Odd One Out</Text>

            <View style={styles.progressBar}>
                <Progress.Bar width={200} height={15} progress={progress} thickness={15} color="purple" unfilledColor="grey" borderRadius={10}></Progress.Bar>

                <Text style={styles.round}>Round: {round}/5</Text>
            </View>

            <View style={styles.horizontalLine}></View>

            <View style={styles.optionsContainer}>

                <TouchableOpacity style={styles.option} onPress={()=>guessCheck()}>
                    <Text style={styles.optionText}>
                        {wordSets[round].options[0]}
                    </Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.option} onPress={()=>guessCheck()}>
                    <Text style={styles.optionText}>
                        {wordSets[round].options[1]}
                    </Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.option} onPress={()=>guessCheck()}>
                    <Text style={styles.optionText}>
                        {wordSets[round].options[2]}
                    </Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.option} onPress={()=>guessCheck()}>
                    <Text style={styles.optionText}>
                        {wordSets[round].options[3]}
                    </Text>
                </TouchableOpacity>
            
            </View>

            <View style={styles.horizontalLine}></View>

            <View>
                <TouchableOpacity style={styles.scoreboard} onPress={()=>scoreboardScreen()}>
                    <Text style={{fontWeight: "bold"}}>Scoreboard</Text>
                </TouchableOpacity>
            </View>

        </View>

    )

}

const styles = StyleSheet.create({
    textIntro: {
        alignSelf: "center",
        marginTop: 20,
    },
    title: {
        alignSelf: "center",
        margin: 10,
        fontSize: 30,
        fontWeight: "bold"
    },
    progressBar: {
        alignSelf: "center"
    },
    round: {
        alignSelf: "center",
        margin: 10,
        fontSize: 20
    },
    optionsContainer: {
        alignItems: "center",
        marginVertical: 20,
    },
    option: {
        backgroundColor: "pink",
        padding: 15,
        margin: 10,
        width: 200,
        borderWidth: 3,
        borderColor: "purple",
        alignItems: "center",
        borderRadius: 15
    },
    optionText: {
        color: "black",
        fontSize: 18,
    },
    scoreboard: {
        alignSelf: "center",
        marginTop: 20,
        fontSize: 20,
        fontWeight: "bold",
        borderWidth: 2,
        padding: 20,
        borderColor: "purple",
        alignItems: "center",
        borderRadius: 15,
        backgroundColor: "pink",
    },
    horizontalLine: {
        borderBottomColor: 'purple', 
        borderBottomWidth: 3,
        borderRadius: 5, 
        width: '80%', 
        alignSelf: 'center', 
        marginTop: 10
    },
});

export default Game;