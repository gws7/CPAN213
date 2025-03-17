import {Text, View, TouchableOpacity, Alert, TextInput} from "react-native";
import a2Style from "../shared/a2Style";
import { useState } from "react";
import AntDesign from '@expo/vector-icons/AntDesign';

const Login = ({navigation}) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loginUser = () => {
        if (email == "admin" && password == "admin") {
            navigation.navigate("Dashboard")
        } else {
            Alert.alert("Invalid login attempt, try again.")
        }
    }   

    return(
        <View>
            <Text style={a2Style.loginText}>Enter your login information:</Text>

            <View style={a2Style.inputStyle}>
                <Text style={a2Style.inputTextTitle}>Email</Text>
                <TextInput
                    style={a2Style.inputField} 
                    placeholder="email@email.com"
                    value={email}
                    onChangeText={setEmail}
                    autoCapitalize="none"
                />                
            </View>
            <View style={a2Style.inputStyle}>
                <Text style={a2Style.inputTextTitle}>Password</Text>
                <TextInput
                    style={a2Style.inputField} 
                    placeholder="password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={true}
                    autoCapitalize="none"
                />                
            </View>

            <View style={a2Style.button}>
                <TouchableOpacity onPress={()=>loginUser()}>
                    <AntDesign name="login" size={50} color="coral" />
                </TouchableOpacity>                
            </View>

        </View>
    )
}

export default Login