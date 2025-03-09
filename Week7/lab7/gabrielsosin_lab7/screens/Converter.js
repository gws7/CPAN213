import React, { useState } from "react";
import { View, Text, StyleSheet, StatusBar, TextInput, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { convertTemp } from "../redux/actions";

const Converter = () => {
  const [input, setInput] = useState(""); // State for user input
  const dispatch = useDispatch();
  const value = useSelector((state) => state.tasksRoot.value);

  const handleConvert = () => {
    if (input.trim() !== "") {
      dispatch(convertTemp(parseFloat(input)));
      setInput("");
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Fahrenheit</Text>
        <Text style={styles.subtitle}>Enter temperature to convert</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter temperature"
          placeholderTextColor="gray"
          keyboardType="numeric"
          value={input}
          onChangeText={setInput}
        />
        <TouchableOpacity style={styles.button} onPress={handleConvert}>
          <Text style={styles.buttonText}>Convert</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>The converted temperature is:</Text>
        <Text style={styles.resultValue}>{value}°F</Text>
      </View>
    </View>
  );
};

export default Converter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a2e",
    padding: 20,
  },
  headerContainer: {
    marginTop: "15%",
    alignItems: "center",
    marginBottom: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#e94560",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#a2a2a2",
    marginTop: 8,
  },
  inputContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 30,
  },
  input: {
    width: '90%',
    height: 50,
    backgroundColor: '#2a2a40',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 18,
    color: '#ffffff',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#3a3a50',
  },
  button: {
    backgroundColor: "#e94560",
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 15,
    width: '90%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultContainer: {
    alignItems: 'center',
    marginTop: 30,
    padding: 20,
    backgroundColor: '#2a2a40',
    borderRadius: 15,
    width: '90%',
    alignSelf: 'center',
  },
  resultText: {
    color: '#a2a2a2',
    fontSize: 16,
    marginBottom: 10,
  },
  resultValue: {
    color: '#e94560',
    fontSize: 36,
    fontWeight: 'bold',
  },
});
