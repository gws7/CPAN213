import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text, ScrollView, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions';
import { format } from 'date-fns';

const AddParkingScreen = ({ navigation }) => {
    const dispatch = useDispatch();

    const [selectedDate] = useState(new Date());
    const [buildingCode, setBuildingCode] = useState('');
    const [hours, setHours] = useState('1');
    const [licensePlate, setLicensePlate] = useState('');
    const [streetAddress, setStreetAddress] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');

    const validateForm = () => {
        //Validation stuff using better validation method and syntax

        //Building validation
        if (!/^[a-zA-Z0-9]{5}$/.test(buildingCode)) {
            Alert.alert('Error', 'Building code must be 5 alphanumeric characters');
            return false;
        }

        //Hours validation
        const validHours = ['1', '4', '12', '24'];
        if (!validHours.includes(hours)) {
            Alert.alert('Error', 'Please select a valid parking duration');
            return false;
        }

        // License plate validation (2-8 alphanumeric)
        if (!/^[a-zA-Z0-9]{2,8}$/.test(licensePlate)) {
            Alert.alert('Error', 'License plate must be 2-8 alphanumeric characters');
            return false;
        }

        // Address validation
        if (!streetAddress.trim()) {
            Alert.alert('Error', 'Please enter a street address');
            return false;
        }

        // Coordinates validation
        if (!latitude || !longitude) {
            Alert.alert('Error', 'Please enter both latitude and longitude');
            return false;
        }

        const lat = parseFloat(latitude);
        const lng = parseFloat(longitude);

        if (isNaN(lat) || isNaN(lng) || lat < -90 || lat > 90 || lng < -180 || lng > 180) {
            Alert.alert('Error', 'Please enter valid coordinates');
            return false;
        }

        return true;
    };

    const handleAddParking = () => {
        if (!validateForm()) return;

        const newParking = {
            buildingCode: buildingCode.toUpperCase(),
            hours: parseInt(hours),
            licensePlate: licensePlate.toUpperCase(),
            location: {
                streetAddress,
                latitude: parseFloat(latitude),
                longitude: parseFloat(longitude)
            },
            dateTime: selectedDate
        };

        dispatch(addTask(newParking));
        navigation.goBack();
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.formGroup}>
                <Text style={styles.label}>Date</Text>
                <View style={styles.dateDisplay}>
                    <Text style={styles.dateText}>
                        {format(selectedDate, 'MMM dd, yyyy')}
                    </Text>
                </View>
            </View>

            <View style={styles.formGroup}>
                <Text style={styles.label}>Building Code (5 alphanumeric)</Text>
                <TextInput
                    style={styles.input}
                    value={buildingCode}
                    onChangeText={setBuildingCode}
                    maxLength={5}
                    placeholder="Enter 5 alphanumeric characters"
                />
            </View>

            <View style={styles.formGroup}>
                <Text style={styles.label}>Parking Duration</Text>
                <View style={styles.hoursContainer}>
                    {['1', '4', '12', '24'].map((hour) => (
                        <TouchableOpacity
                            key={hour}
                            style={[
                                styles.hourButton,
                                hours === hour && styles.hourButtonActive
                            ]}
                            onPress={() => setHours(hour)}
                        >
                            <Text style={[
                                styles.hourButtonText,
                                hours === hour && styles.hourButtonTextActive
                            ]}>
                                {hour}h
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>

            <View style={styles.formGroup}>
                <Text style={styles.label}>License Plate (2-8 alphanumeric)</Text>
                <TextInput
                    style={styles.input}
                    value={licensePlate}
                    onChangeText={setLicensePlate}
                    maxLength={8}
                    placeholder="Enter license plate"
                />
            </View>

            <View style={styles.formGroup}>
                <Text style={styles.label}>Street Address</Text>
                <TextInput
                    style={styles.input}
                    value={streetAddress}
                    onChangeText={setStreetAddress}
                    placeholder="Enter street address"
                />
            </View>

            <View style={styles.formGroup}>
                <Text style={styles.label}>Location Coordinates</Text>
                <View style={styles.coordinatesContainer}>
                    <TextInput
                        style={[styles.input, styles.coordinateInput]}
                        value={latitude}
                        onChangeText={setLatitude}
                        placeholder="Latitude"
                        keyboardType="numeric"
                    />
                    <TextInput
                        style={[styles.input, styles.coordinateInput]}
                        value={longitude}
                        onChangeText={setLongitude}
                        placeholder="Longitude"
                        keyboardType="numeric"
                    />
                </View>
            </View>

            <TouchableOpacity 
                style={styles.saveButton}
                onPress={handleAddParking}
            >
                <Text style={styles.saveButtonText}>Save Parking Record</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: 'whitesmoke',
    },
    formGroup: {
        marginBottom: 15,
    },
    label: {
        fontSize: 14,
        color: 'dimgray',
        marginBottom: 4,
    },
    input: {
        backgroundColor: 'white',
        borderColor: 'lightgray',
        borderWidth: 1,
        padding: 5,
        borderRadius: 3,
        color: 'black',
        fontSize: 16,
    },
    hoursContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 4,
    },
    hourButton: {
        backgroundColor: 'white',
        padding: 5,
        borderRadius: 3,
        borderWidth: 1,
        borderColor: 'lightgray',
        flex: 1,
        marginHorizontal: 2,
        alignItems: 'center',
    },
    hourButtonActive: {
        backgroundColor: 'dodgerblue',
        borderColor: 'dodgerblue',
    },
    hourButtonText: {
        color: 'dimgray',
        fontSize: 14,
    },
    hourButtonTextActive: {
        color: 'white',
    },
    coordinatesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    coordinateInput: {
        flex: 1,
        marginHorizontal: 2,
    },
    saveButton: {
        backgroundColor: 'dodgerblue',
        padding: 10,
        borderRadius: 3,
        alignItems: 'center',
        marginTop: 15,
        marginBottom: 20,
    },
    saveButtonText: {
        color: 'white',
        fontSize: 16,
    },
    dateDisplay: {
        backgroundColor: 'white',
        borderColor: 'lightgray',
        borderWidth: 1,
        padding: 5,
        borderRadius: 3,
    },
    dateText: {
        color: 'dimgray',
        fontSize: 16,
    },
});

export default AddParkingScreen;
