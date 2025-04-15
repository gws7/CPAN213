import React, { useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFlights } from '../redux/actions';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const { flights } = useSelector(state => state.flights);

    useEffect(() => {
        dispatch(fetchFlights());
    }, [dispatch]);

    const renderMissionItem = ({ item }) => (
        <TouchableOpacity 
            style={styles.missionItem}
            onPress={() => navigation.navigate('MissionDetails', { flight: item })}
        >
            <Text style={styles.missionText}>{item.mission_name}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerRow}>
                    <Text style={styles.headerText}>Gabriel</Text>
                    <TouchableOpacity 
                        style={styles.favoritesButton}
                        onPress={() => navigation.navigate('Favorites')}
                    >
                        <Icon name="star" size={40} color="red" />
                    </TouchableOpacity>
                </View>
                <Text style={styles.headerText}>N01646959</Text>
            </View>
            
            <FlatList
                data={flights}
                renderItem={renderMissionItem}
                keyExtractor={item => `${item.flight_number}-${item.mission_name}`}
                style={styles.list}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        padding: 15,
        backgroundColor: '#f0f0f0',
        borderBottomWidth: 4,
        borderBottomColor: 'red',
    },
    headerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    headerText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'red'
    },
    favoritesButton: {
        padding: 5,
    },
    list: {
        flex: 1,
    },
    missionItem: {
        padding: 15,
        borderBottomWidth: 5,
        borderBottomColor: 'red',
    },
    missionText: {
        fontSize: 16,
    },
});

export default HomeScreen;
