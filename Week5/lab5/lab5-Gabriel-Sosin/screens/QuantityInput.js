import { View, Text, TouchableOpacity, TextInput, Alert } from "react-native";
import GlobalStyles from "../shared/GlobalStyles";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { useState } from "react";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const QuantityInput = ({ navigation }) => {
    const [quantity, setQuantity] = useState("");

    const calculate = () => {
        if (quantity === "") {
            Alert.alert("Invalid input", "Please enter a valid numerical quantity.");
        } else {
            navigation.navigate("Calculate", { userQuantity: quantity });
        }
    };

    return (
        <View style={GlobalStyles.mainContainer}>
            <View style={GlobalStyles.subContainer}>
                <FontAwesome6 name="money-bill-1" size={30} color="green" />
                <Text style={GlobalStyles.titleText}>Bill Calculator</Text>
                <FontAwesome6 name="money-bill-1" size={30} color="green" />
            </View>

            <View style={GlobalStyles.subContainer}>
                <TextInput
                    placeholder="Enter Product Quantity"
                    value={quantity}
                    onChangeText={setQuantity}
                    keyboardType="numeric"
                    style={GlobalStyles.textInput}
                    textAlign="center"
                    width="60%"
                />
            </View>

            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: "5%", width: "80%", alignSelf: "center"}}>
                <View style={{flex: 1, height: 3, backgroundColor: "green", marginTop:15}} />     
            </View>

            <View style={GlobalStyles.subContainer}>
                <TouchableOpacity onPress={calculate}>
                    <Text style={GlobalStyles.buttonStyle}>Calculate</Text>
                </TouchableOpacity>
            </View>

            <View style={GlobalStyles.subContainer}>
                <MaterialIcons name="receipt-long" size={100} color="green" />
            </View>

            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: "5%", width: "80%", alignSelf: "center"}}>
                <View style={{flex: 1, height: 3, backgroundColor: "green", marginTop:15}} />     
            </View>

            <View style={GlobalStyles.footerText}>
                <Text style={GlobalStyles.footerInfo}>In this app you may input the number of products you have chosen and the you will be presented with the total and a final bill</Text>
            </View>
            
            <View style={{alignSelf: "center", marginTop: 10}}>
                <FontAwesome5 name="copyright" size={24} color="green" />
            </View>

        </View>            
    );
};

export default QuantityInput;
