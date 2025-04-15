import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useSelector } from 'react-redux';

const FavoritesScreen = () => {
    const favorites = useSelector(state => state.flights?.favorites || []);

    const renderFavoriteItem = ({ item }) => (
        <View style={styles.favoriteItem}>
            <Text style={styles.missionName}>{item.mission_name}</Text>
            <Text style={styles.details}>Rocket: {item.rocket_name}</Text>
            <Text style={styles.details}>Launch Date: {item.launch_date}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Favorites</Text>
            </View>
            
            <FlatList
                data={favorites}
                renderItem={renderFavoriteItem}
                keyExtractor={(item) => String(item.flightId)}
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
        borderBottomWidth: 2,
        borderBottomColor: 'red',
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    list: {
        flex: 1,
    },
    favoriteItem: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    missionName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    details: {
        fontSize: 14,
        color: '#666',
    },
});

export default FavoritesScreen; 