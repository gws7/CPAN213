import {Text, View} from "react-native";
import a2Style from "../shared/a2Style";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const Booking = ({route}) => {
    const { studentId, name, numOfPeople, room } = route.params;

    return(
        <View>
            <Text style={a2Style.bookingTextTitle}>Room Information</Text>

            <View style={a2Style.inputStyle}>
                <Text style={a2Style.bookingFieldAccept}>
                    The Room Is Available
                </Text>
                <Text style={a2Style.acceptedText}>booking information has been sent to your email</Text>             
            </View>

            <View style={a2Style.horizontalLine} />

            <View style={a2Style.bookingIcon}>
                <MaterialCommunityIcons name="google-classroom" size={80} color="coral" />
            </View>

            <Text style={a2Style.inputTextTitle}>Your Booking Information</Text>
            <View style={a2Style.infoText}>
                <Text>Name: {name}</Text>
                <Text>StudentID: {studentId}</Text>
                <Text>Number of People: {numOfPeople}</Text>
                <Text>Selected Room: {room}</Text>
            </View>
        </View>
    )
}

export default Booking;