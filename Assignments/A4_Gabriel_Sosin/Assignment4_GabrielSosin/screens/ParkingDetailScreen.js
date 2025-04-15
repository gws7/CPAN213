import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { editTask, deleteTask } from '../redux/actions';
import { format } from 'date-fns';

const ParkingDetailScreen = ({ route, navigation }) => {
    const dispatch = useDispatch();
    const { parking } = route.params;
    const [isEditing, setIsEditing] = useState(false);
    const [editedParking, setEditedParking] = useState(null);

    useEffect(() => {
        setEditedParking(parking);
    }, [parking]);

    const handleEditParking = () => {
        if (!validateForm()) return;

        const updatedParking = {
            ...editedParking,
            buildingCode: editedParking.buildingCode.toUpperCase(),
            licensePlate: editedParking.licensePlate.toUpperCase(),
            hours: parseInt(editedParking.hours),
            location: {
                streetAddress: editedParking.location.streetAddress,
                latitude: parseFloat(editedParking.location.latitude),
                longitude: parseFloat(editedParking.location.longitude)
            }
        };

        console.log(`updatedToParking : ${JSON.stringify(updatedParking)}`);
        dispatch(editTask(updatedParking));
        setIsEditing(false);
    };

    const handleDeleteParking = () => {
        Alert.alert(
            'Delete Parking Record',
            'Are you sure you want to delete this parking record?',
            [
                { text: 'Cancel', style: 'cancel' },
                {
                    text: 'Delete',
                    style: 'destructive',
                    onPress: () => {
                        console.log(`Trying to delete parking record with ID: ${parking.id}`);
                        dispatch(deleteTask(parking.id));
                        navigation.goBack();
                    }
                }
            ]
        );
    };

    const validateForm = () => {
        //Building validation 
        if (!/^[a-zA-Z0-9]{5}$/.test(editedParking.buildingCode)) {
            Alert.alert('Error', 'Building code must be exactly 5 alphanumeric characters');
            return false;
        }

        // Hours validation
        const validHours = [1, 4, 12, 24];
        if (!validHours.includes(parseInt(editedParking.hours))) {
            Alert.alert('Error', 'Please select a valid parking duration');
            return false;
        }

        // License plate validation (2-8 alphanumeric)
        if (!/^[a-zA-Z0-9]{2,8}$/.test(editedParking.licensePlate)) {
            Alert.alert('Error', 'License plate must be 2-8 alphanumeric characters');
            return false;
        }

        // Address validation
        if (!editedParking.location.streetAddress.trim()) {
            Alert.alert('Error', 'Please enter a street address');
            return false;
        }

        // Coordinates validation
        const lat = parseFloat(editedParking.location.latitude);
        const lng = parseFloat(editedParking.location.longitude);

        if (isNaN(lat) || isNaN(lng) || lat < -90 || lat > 90 || lng < -180 || lng > 180) {
            Alert.alert('Error', 'Please enter valid coordinates');
            return false;
        }

        return true;
    };

    if (!editedParking) return null;

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Parking Details</Text>
                <TouchableOpacity
                    style={styles.editButton}
                    onPress={() => setIsEditing(!isEditing)}
                >
                    <Text style={styles.editButtonText}>
                        {isEditing ? 'Cancel' : 'Edit'}
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.fieldContainer}>
                <Text style={styles.label}>Building Code</Text>
                {isEditing ? (
                    <TextInput
                        style={styles.input}
                        value={editedParking.buildingCode}
                        onChangeText={(text) => setEditedParking({ ...editedParking, buildingCode: text })}
                        placeholder="Enter building code"
                    />
                ) : (
                    <Text style={styles.value}>{editedParking.buildingCode}</Text>
                )}
            </View>

            <View style={styles.fieldContainer}>
                <Text style={styles.label}>License Plate</Text>
                {isEditing ? (
                    <TextInput
                        style={styles.input}
                        value={editedParking.licensePlate}
                        onChangeText={(text) => setEditedParking({ ...editedParking, licensePlate: text })}
                        placeholder="Enter license plate"
                    />
                ) : (
                    <Text style={styles.value}>{editedParking.licensePlate}</Text>
                )}
            </View>

            <View style={styles.fieldContainer}>
                <Text style={styles.label}>Hours</Text>
                {isEditing ? (
                    <TextInput
                        style={styles.input}
                        value={editedParking.hours.toString()}
                        onChangeText={(text) => setEditedParking({ ...editedParking, hours: text })}
                        placeholder="Enter hours"
                        keyboardType="numeric"
                    />
                ) : (
                    <Text style={styles.value}>{editedParking.hours}h</Text>
                )}
            </View>

            <View style={styles.fieldContainer}>
                <Text style={styles.label}>Street Address</Text>
                {isEditing ? (
                    <TextInput
                        style={styles.input}
                        value={editedParking.location.streetAddress}
                        onChangeText={(text) => setEditedParking({
                            ...editedParking,
                            location: { ...editedParking.location, streetAddress: text }
                        })}
                        placeholder="Enter street address"
                    />
                ) : (
                    <Text style={styles.value}>{editedParking.location.streetAddress}</Text>
                )}
            </View>

            <View style={styles.fieldContainer}>
                <Text style={styles.label}>Latitude</Text>
                {isEditing ? (
                    <TextInput
                        style={styles.input}
                        value={editedParking.location.latitude.toString()}
                        onChangeText={(text) => setEditedParking({
                            ...editedParking,
                            location: { ...editedParking.location, latitude: text }
                        })}
                        placeholder="Enter latitude"
                        keyboardType="numeric"
                    />
                ) : (
                    <Text style={styles.value}>{editedParking.location.latitude}</Text>
                )}
            </View>

            <View style={styles.fieldContainer}>
                <Text style={styles.label}>Longitude</Text>
                {isEditing ? (
                    <TextInput
                        style={styles.input}
                        value={editedParking.location.longitude.toString()}
                        onChangeText={(text) => setEditedParking({
                            ...editedParking,
                            location: { ...editedParking.location, longitude: text }
                        })}
                        placeholder="Enter longitude"
                        keyboardType="numeric"
                    />
                ) : (
                    <Text style={styles.value}>{editedParking.location.longitude}</Text>
                )}
            </View>

            <View style={styles.fieldContainer}>
                <Text style={styles.label}>Date</Text>
                <Text style={styles.value}>
                    {format(new Date(editedParking.dateTime), 'MMM dd, yyyy')}
                </Text>
            </View>

            {isEditing ? (
                <TouchableOpacity style={styles.saveButton} onPress={handleEditParking}>
                    <Text style={styles.saveButtonText}>Save Changes</Text>
                </TouchableOpacity>
            ) : (
                <TouchableOpacity style={styles.deleteButton} onPress={handleDeleteParking}>
                    <Text style={styles.deleteButtonText}>Delete Parking Record</Text>
                </TouchableOpacity>
            )}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'whitesmoke',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'dodgerblue',
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    editButton: {
        padding: 5,
    },
    editButtonText: {
        color: 'white',
        fontSize: 16,
    },
    fieldContainer: {
        padding: 10,
        backgroundColor: 'white',
        margin: 5,
        borderRadius: 5,
    },
    label: {
        fontSize: 14,
        color: 'dimgray',
        marginBottom: 2,
    },
    value: {
        fontSize: 16,
        color: 'black',
    },
    input: {
        borderColor: 'lightgray',
        borderWidth: 1,
        padding: 5,
        borderRadius: 3,
        fontSize: 16,
    },
    saveButton: {
        backgroundColor: 'dodgerblue',
        padding: 10,
        margin: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    saveButtonText: {
        color: 'white',
        fontSize: 16,
    },
    deleteButton: {
        backgroundColor: 'crimson',
        padding: 10,
        margin: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    deleteButtonText: {
        color: 'white',
        fontSize: 16,
    },
});

export default ParkingDetailScreen;
