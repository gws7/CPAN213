import { Text, View, TouchableOpacity, FlatList } from "react-native";
import { useSelector, useDispatch } from 'react-redux';
import { deleteBooking } from '../redux/actions';
import a2Style from "../shared/a2Style";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const RoomList = () => {
    const bookings = useSelector(state => state.tasksRoot.bookings);
    const dispatch = useDispatch();

    const handleDeleteBooking = (roomNumber, studentId) => {
        dispatch(deleteBooking({ roomNumber, studentId }));
    };

    const renderBooking = ({ item }) => (
        <View style={a2Style.inputStyle}>
            <View style={a2Style.infoText}>
                <Text>Name: {item.name}</Text>
                <Text>StudentID: {item.studentId}</Text>
                <Text>Number of People: {item.numOfPeople}</Text>
                <Text>Selected Room: {item.roomNumber}</Text>
            </View>
            <TouchableOpacity 
                onPress={() => handleDeleteBooking(item.roomNumber, item.studentId)}
                style={a2Style.deleteButton}
            >
                <MaterialCommunityIcons name="delete" size={24} color="red" />
            </TouchableOpacity>
        </View>
    );

    return (
        <View>
            <Text style={a2Style.bookingTextTitle}>Your Booked Rooms</Text>
            
            {bookings.length === 0 ? (
                <View style={a2Style.inputStyle}>
                    <Text style={a2Style.bookingFieldDeny}>No Rooms Booked</Text>
                </View>
            ) : (
                <FlatList
                    data={bookings}
                    renderItem={renderBooking}
                    keyExtractor={(item, index) => index.toString()}
                />
            )}
        </View>
    );
};

export default RoomList; 