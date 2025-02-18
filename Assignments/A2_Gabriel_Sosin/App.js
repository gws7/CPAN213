import { Text, Alert, View, StatusBar, TouchableOpacity } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { CommonActions, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import a2Style from './shared/a2Style';

import Login from './screens/login';
import Dashboard from './screens/dashboard';
import Booking from './screens/booking';

const Stack = createNativeStackNavigator()

export default function App() {

  const headerOptionsWithLogout = ({navigation}) => (
    {
      headerStyle: {
        backgroundColor: "orange"
      },
      headerTitleAlign: "center",
      headerTintColor: "black",
      headerRight: () => (
        <TouchableOpacity
          onPress={() => {
            console.log()
            navigation.dispatch(
              CommonActions.reset({
                index: 0,
                routes: [{name:"Login"}],
              })
            );
          }}
        >
          <Text>Logout</Text>
        </TouchableOpacity>
      ),
    }
  )

  return (
    <SafeAreaProvider>
      <SafeAreaView style={a2Style.safeArea}>

        <StatusBar
          backgroundColor={"orange"} barStyle={"dark-content"}
        />

        <NavigationContainer>
          <Stack.Navigator initialRouteName='Login'>
            <Stack.Group>

              <Stack.Screen
                component={Login}
                name={"Login"}
                options={() => ({
                  headerStyle: {
                    backgroundColor: "orange"
                  },
                  headerTitleAlign: "center",
                  headerTintColor: "black",
                })}
              >
              </Stack.Screen>

            </Stack.Group>

            <Stack.Group screenOptions={headerOptionsWithLogout}>

              <Stack.Screen 
                component={Dashboard} 
                name={"Dashboard"}
              ></Stack.Screen>

              <Stack.Screen
                component={Booking}
                name={"Booking"}
              ></Stack.Screen>

            </Stack.Group>
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
