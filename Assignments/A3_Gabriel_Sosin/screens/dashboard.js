import {Text, View, TouchableOpacity, Alert, TextInput} from "react-native";
import { Picker } from '@react-native-picker/picker';
import a2Style from "../shared/a2Style";
import { useState } from "react";
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import roomData from "../shared/data";
import { useDispatch } from 'react-redux';
import { addBooking } from '../redux/actions';

const Dashboard = ({navigation, route}) => {
    const dispatch = useDispatch();
    const [studentId, setStudentId] = useState("");
    const [name, setName] = useState("");
    const [numOfPeople, setNumOfPeople] = useState(0);
    const [room, setRoom] = useState("");

    const submitSelection = () => {
        if (studentId == "" || name == "" || numOfPeople == 0 || room == "") {
            Alert.alert("Invalid Input, please enter the correct information")
        } else {
            const bookingData = {
                studentId,
                name,
                numOfPeople: parseInt(numOfPeople),
                roomNumber: room
            };
            
            dispatch(addBooking(bookingData));

            navigation.navigate("Booking", {
                studentId, 
                name, 
                numOfPeople, 
                room
            });
        }
    }

    return(
        <View>
            <Text style={a2Style.dashboardTitleText}>Input Your Information</Text>

            <TouchableOpacity 
                style={[a2Style.button, { marginBottom: 20 }]}
                onPress={() => navigation.navigate("Room List")}
            >
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <MaterialCommunityIcons name="format-list-bulleted" size={24} color="coral" />
                    <Text style={{ marginLeft: 10, color: 'coral' }}>View Booked Rooms</Text>
                </View>
            </TouchableOpacity>

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