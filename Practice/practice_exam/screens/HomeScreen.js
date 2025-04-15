import React, { useEffect } from 'react';
import { View, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCharacters } from '../redux/actions';

const HomeScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const { listOfCharacters } = useSelector(state => state.characters);

    useEffect(() => {
        dispatch(fetchCharacters());
    }, [dispatch]);

    const renderItem = ({ item, index }) => (
        <TouchableOpacity 
            key={item._id || index}
            style={styles.item}
            onPress={() => navigation.navigate('CharacterDetail', { character: item })}
        >
            <Text style={styles.itemText}>{item.name}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={listOfCharacters}
                renderItem={renderItem}
                keyExtractor={(item, index) => item._id || `character-${index}`}
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
    list: {
        flex: 1,
    },
    item: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: 'silver',
        backgroundColor: 'white',
    },
    itemText: {
        fontSize: 16,
        color: 'navy',
    },
});

export default HomeScreen; 