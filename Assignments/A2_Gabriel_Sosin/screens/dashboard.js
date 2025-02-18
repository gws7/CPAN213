import {Text, View, TouchableOpacity, Alert, TextInput} from "react-native";
import { Picker } from '@react-native-picker/picker';
import a2Style from "../shared/a2Style";
import { useState } from "react";
import AntDesign from '@expo/vector-icons/AntDesign';
import roomData from "../shared/data";

const Dashboard = ({navigation, route}) => {

    const [studentId, setStudentId] = useState("");
    const [name, setName] = useState("");
    const [numOfPeople, setNumOfPeople] = useState(0);
    const [room, setRoom] = useState("");

    const submitSelection = () => {
        if (studentId == "" || name == "" || numOfPeople == 0 || room == "") {
            Alert.alert("Invalid Input, please enter the correct information")
        } else {
            navigation.navigate("Booking", 
                {
                    studentId, name, numOfPeople, room
                }
            )
        }
    }

    return(
        <View>
            <Text style={a2Style.dashboardTitleText}>Input Your Information</Text>

            <View style={a2Style.inputStyle}>
                <Text style={a2Style.inputTextTitle}>Student ID</Text>
                <TextInput
                    style={a2Style.inputField} 
                    placeholder="ex: n012345678"
                    value={studentId}
                    onChangeText={setStudentId}
                />                
            </View>

            <View style={a2Style.inputStyle}>
                <Text style={a2Style.inputTextTitle}>Name</Text>
                <TextInput
                    style={a2Style.inputField} 
                    placeholder="your name"
                    value={name}
                    onChangeText={setName}
                />                
            </View>

            <View style={a2Style.inputStyle}>
                <Text style={a2Style.inputTextTitle}>Number of People</Text>
                <TextInput
                    style={a2Style.inputField} 
                    placeholder="number of people"
                    value={numOfPeople}
                    onChangeText={setNumOfPeople}
                    inputMode="numeric"
                />                
            </View>

            <View style={a2Style.inputStyle}>
                <Text style={a2Style.inputTextTitle}>Select a Room</Text>
                <View style={a2Style.pickerField}>
                    <Picker
                        selectedValue={room}
                        onValueChange={(itemValue) => setRoom(itemValue)}
                    >
                        <Picker.Item label="Rooms" value="" />
                        {roomData.map((room, index) => (
                            <Picker.Item 
                                key={index} 
                                label={`${room.roomNumber}`} 
                                value={room.roomNumber} 
                            />
                        ))}
                    </Picker>
                </View>
            </View>

            <View style={a2Style.horizontalLine} />
                        
            <Text style={a2Style.dashboardText}>Continue to Check Room Availability</Text>

            <View style={a2Style.button}>
                <TouchableOpacity onPress={()=>submitSelection()}>
                    <AntDesign name="login" size={50} color="coral" />
                </TouchableOpacity>                
            </View>



        </View>    
    )
}

export default Dashboard