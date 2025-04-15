import React, { useEffect } from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { fetchTasks } from "../redux/actions";
import { format } from 'date-fns';

const ParkingListScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const taskList = useSelector((state) => state.tasks.listOfTasks);

    useEffect(() => {
        const taskListener = dispatch(fetchTasks());
        return () => taskListener;
    }, [dispatch]);

    const renderParkingItem = ({ item }) => (
        <TouchableOpacity
            style={styles.parkingItem}
            onPress={() => navigation.navigate('ParkingDetail', { parking: item })}
        >
            <View style={styles.parkingContent}>
                <Text style={styles.dateText}>
                    {format(new Date(item.dateTime), 'MMM dd, yyyy')}
                </Text>
                <Text style={styles.buildingCode}>Building: {item.buildingCode}</Text>
            </View>
            <View style={styles.timeBadge}>
                <Text style={styles.timeText}>{item.hours}h</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Parking Records</Text>
            </View>
            {(!taskList || taskList.length === 0) ? (
                <View style={styles.emptyContainer}>
                    <Text style={styles.emptyText}>No parking records found</Text>
                    <Text style={styles.emptySubText}>Add your first parking record</Text>
                </View>
            ) : (
                <FlatList
                    data={taskList}
                    renderItem={renderParkingItem}
                    keyExtractor={(item) => item.id}
                    style={styles.list}
                    contentContainerStyle={styles.listContent}
                />
            )}
            <TouchableOpacity 
                style={styles.addButton} 
                onPress={() => navigation.navigate('AddParking')}
            >
                <Text style={styles.addButtonText}>+ Add New Parking</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'whitesmoke',
    },
    header: {
        padding: 10,
        backgroundColor: 'dodgerblue',
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    },
    list: {
        flex: 1,
    },
    listContent: {
        padding: 10,
    },
    parkingItem: {
        backgroundColor: 'white',
        padding: 10,
        marginBottom: 8,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: 'lightgray',
    },
    parkingContent: {
        flex: 1,
    },
    dateText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 2,
    },
    buildingCode: {
        fontSize: 14,
        color: 'dimgray',
    },
    timeBadge: {
        backgroundColor: 'dodgerblue',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 3,
        marginLeft: 8,
    },
    timeText: {
        color: 'white',
        fontSize: 14,
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    emptyText: {
        fontSize: 16,
        color: 'dimgray',
        marginBottom: 4,
        textAlign: 'center',
    },
    emptySubText: {
        fontSize: 14,
        color: 'gray',
        textAlign: 'center',
    },
    addButton: {
        backgroundColor: 'dodgerblue',
        padding: 10,
        margin: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    addButtonText: {
        color: 'white',
        fontSize: 16,
    },
});

export default ParkingListScreen;