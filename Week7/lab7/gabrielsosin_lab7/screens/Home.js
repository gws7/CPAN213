import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1a1a2e" />
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Temperature Converter</Text>
        <Text style={styles.subtitle}>Convert to °F</Text>
      </View>
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate("Converter")}
      > 
        <Text style={styles.buttonText}>Start Converting</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1a1a2e",
    padding: 20,
  },
  headerContainer: {
    position: "absolute",
    top: "15%",
    left: 0,
    right: 0,
    alignItems: "center",
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
  button: {
    backgroundColor: "#e94560",
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 15,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "600",
    letterSpacing: 0.5,
  },
});
