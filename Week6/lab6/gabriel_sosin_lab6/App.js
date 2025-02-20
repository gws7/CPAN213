import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import * as Progress from "react-native-progress";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function App() {

  const [progress, setProgress] = useState(0);
  const [text, onChangeText] = useState('');

  const barFull = () => {
    return progress === 1 ? "red" : "blue";
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
 
        <View>

          <Text style={styles.lab6}>Lab 6</Text>

          <View style={styles.horizontalLine} />

          <View style={styles.container}>

            <StatusBar style="auto" />
            <Text style={styles.appTitleText}>Character Counter</Text>
            <View style={styles.inputArea}>
              <TextInput
                editable
                multiline
                numberOfLines={4}
                maxLength={100}
                placeholder='Type out something'
                placeholderTextColor={"blue"}
                onChangeText={text => {

                  setProgress(text.length / 100);
                }}
              />
            </View>

            {/* Ignore this I was debugging
          <Text>{progress}</Text> */}

            <View style={styles.progressArea}>

              <Progress.Bar width={200} height={10} progress={progress} thickness={15} color={barFull()} unfilledColor="lightcyan" borderRadius={5}></Progress.Bar>

              <View style={styles.iconContainer}>
                <MaterialCommunityIcons name="text-account" size={60} color="mediumblue" />
              </View>

            </View>

          </View>

          <View style={styles.horizontalLine} />
          
        </View>
      </SafeAreaView>
    </SafeAreaProvider>


  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "smoke"
  },
  lab6: {
    alignSelf: "center",
    marginTop: 15,
    fontSize: 20,
    fontWeight: "bold",
    color: "deepskyblue"
  },
  container: {
    borderWidth: 3,
    margin: 20,
    padding: 20,
    borderColor: "blue",
    borderRadius: 10,
    backgroundColor: "deepskyblue"
  },
  appTitleText: {
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "bold",
    padding: 10,
    color: "lightcyan",
    textShadowColor: "black",
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 5
  },
  inputArea: {
    padding: 15,
    borderWidth: 3,
    borderRadius: 10,
    margin: 20,
    borderColor: "blue",
    backgroundColor: "lightcyan"
  },
  iconContainer: {
    alignSelf: "center",
    marginTop: 20,

  },
  progressArea: {
    alignSelf: "center"
  },
  horizontalLine: {
    borderBottomColor: 'blue',
    borderBottomWidth: 5,
    borderRadius: 5,
    width: '90%',
    alignSelf: 'center',
    marginVertical: 20
  },
});
