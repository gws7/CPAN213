import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Game from './screens/Game';
import Scoreboard from './screens/Scoreboard'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        
        <StatusBar backgroundColor={"pink"}></StatusBar>

        <NavigationContainer>
          <Stack.Navigator>

            <Stack.Screen
              component={Game}
              name={"Game"}
              options={() => ({
                headerStyle: {
                  backgroundColor: "pink"
                },
                headerTitleAlign: "center",
                headerTintColor: "black",
              })} 
            />

            <Stack.Screen
              component={Scoreboard}
              name={"Scoreboard"}
              options={() => ({
                headerStyle: {
                  backgroundColor: "pink"
                },
                headerTitleAlign: "center",
                headerTintColor: "black",
              })} 
            />

          
          </Stack.Navigator>
        </NavigationContainer>
     
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});
