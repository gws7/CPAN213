import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import GlobalStyles from "./shared/GlobalStyles";
import { CommonActions, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import QuantityInput from "./screens/QuantityInput";
import Calculate from "./screens/Calculate";
import Final from "./screens/Final"


const Stack = createNativeStackNavigator();

export default function App() {

  const headerOptions = () => ( 
    {
      headerStyle : {
        backgroundColor: 'white'
      },
      headerTintColor: 'green',
      headerTitleAlign: 'center',
    }
  )

  return (
    <SafeAreaProvider>
      <SafeAreaView style={GlobalStyles.safeArea}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Quantity" screenOptions={{color:"red"}}> 

            <Stack.Group screenOptions={headerOptions}>
              
              <Stack.Screen 
                component={QuantityInput} 
                name="Quantity"
              />

              <Stack.Screen 
                component={Calculate} 
                name="Calculate"
              />

              <Stack.Screen 
                component={Final} 
                name="Final Price"
              />

            </Stack.Group>
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
