import { Text, View, TouchableOpacity, Image, Alert, TextInput } from "react-native";
import a1Styles from "../shared/a1Styles";
import React, { useState } from "react";
import { COLORS } from "../shared/consts";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const HomeScreen = () => {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bmi, setBmi] = useState(0);

    const calculate = () => {
        if (weight > 0 && height > 0 && height <= 3) {  
            const newBmi = weight / (height ** 2); 
            setBmi(newBmi); 
    
            if (newBmi <= 18.5) {
                Alert.alert(`BMI: ${newBmi.toFixed(1)}\nYou are underweight`);
            } else if (newBmi <= 24.9) {
                Alert.alert(`BMI: ${newBmi.toFixed(1)}\nYou have a normal weight`);
            } else if (newBmi <= 29.9) {
                Alert.alert(`BMI: ${newBmi.toFixed(1)}\nYou are overweight`);
            } else {
                Alert.alert(`BMI: ${newBmi.toFixed(1)}\nYou are obese`);
            }
        } else {
            Alert.alert("Invalid Inputs, please try again");
        }
    }

    const reset = () => {
        setWeight("");
        setHeight("");
    }
    
    return(
        <View style={a1Styles.homeContainer}>
            <Text style={a1Styles.title}>BMI</Text>

            <Text style={[a1Styles.subtitle, {marginTop: "3%"}]}>Use this simple tool to calculate your BMI:</Text>

            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: "5%"}}>
                <View style={{flex: 1, height: 1, backgroundColor: COLORS.third, marginTop:15}} /> 
            </View>
             
            <Image
                source={{ uri: 'https://cdn-icons-png.flaticon.com/512/10476/10476452.png' }}
                style={a1Styles.image}
            />

            <Text style={a1Styles.label}>Weight:</Text>
            <TextInput
                style={a1Styles.input}
                placeholder='Weight in KG'
                placeholderTextColor={COLORS.third}
                value={weight}
                onChangeText={setWeight}
                maxLength={3}
                inputMode="numeric"
            />

            <Text style={a1Styles.label}>Height:</Text>
            <TextInput
                style={a1Styles.input}
                placeholder='Height in meters'
                placeholderTextColor={COLORS.third}
                value={height}
                onChangeText={setHeight}
                maxLength={4}
                inputMode="numeric"
            />

            <View style={{ flexDirection: "row", marginTop: 30, gap: "15%" }}>
                <TouchableOpacity onPress={ () => calculate()}>
                    <MaterialIcons name="calculate" size={60} color={COLORS.third} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => reset()}>
                    <MaterialIcons name="clear" size={60} color={COLORS.third}  />
                </TouchableOpacity>
            </View>

            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: "5%"}}>
                <View style={{flex: 1, height: 1, backgroundColor: COLORS.third, marginTop:15}} /> 
            </View>

            <Text style={[a1Styles.subtitle, {marginTop: "15%"}]}>Gabriel Sosin - N01646959</Text> 
        </View>
    )
}

export default HomeScreen