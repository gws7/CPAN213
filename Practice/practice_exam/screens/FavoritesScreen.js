import React, { useEffect } from 'react';
import { View, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';

const FavoritesScreen = ({ navigation }) => {
    const { favorites } = useSelector(state => state.characters);

    const renderItem = ({ item }) => (
        <TouchableOpacity 
            style={styles.item}
            onPress={() => navigation.navigate('CharacterDetail', { character: item })}
        >
            <View style={styles.itemContent}>
                <Ionicons name="heart" size={24} color="purple" style={styles.heartIcon} />
                <View style={styles.textContainer}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.house}>{item.house}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );

    if (!favorites || favorites.length === 0) {
        return (
            <View style={styles.emptyContainer}>
                <Ionicons name="heart-outline" size={50} color="purple" />
                <Text style={styles.emptyText}>No favorite characters yet</Text>
                <Text style={styles.emptySubtext}>Add characters to your favorites to see them here</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={favorites}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                style={styles.list}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'aliceblue',
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'aliceblue',
        padding: 20,
    },
    emptyText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'navy',
        marginTop: 10,
    },
    emptySubtext: {
        fontSize: 16,
        color: 'gray',
        textAlign: 'center',
        marginTop: 5,
    },
    list: {
        flex: 1,
    },
    item: {
        backgroundColor: 'white',
        marginHorizontal: 10,
        marginVertical: 5,
        borderRadius: 10,
        padding: 15,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    itemContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    heartIcon: {
        marginRight: 15,
    },
    textContainer: {
        flex: 1,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'navy',
    },
    house: {
        fontSize: 14,
        color: 'gray',
        marginTop: 2,
    },
});

export default FavoritesScreen; 