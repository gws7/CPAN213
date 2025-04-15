import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { addFav } from '../redux/actions';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const MissionDetailsScreen = ({ route, navigation }) => {
    const { flight } = route.params;
    const dispatch = useDispatch();

    const handleAddToFavorites = () => {
        dispatch(addFav(flight));
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>{flight.mission_name}</Text>
            </View>
            
            <View style={styles.content}>
                <View style={styles.iconContainer}>
                    <Icon name="rocket" size={100} color="#666" />
                </View>
                
                <View style={styles.details}>
                    <Text style={styles.label}>Launch Year:</Text>
                    <Text style={styles.value}>{flight.launch_year}</Text>
                    
                    <Text style={styles.label}>Rocket:</Text>
                    <Text style={styles.value}>{flight.rocket.rocket_name}</Text>
                    
                    <Text style={styles.label}>Launch Site:</Text>
                    <Text style={styles.value}>{flight.launch_site.site_name_long}</Text>
                    
                    <Text style={styles.label}>Launch Success:</Text>
                    <Text style={styles.value}>{flight.launch_success ? 'Yes' : 'No'}</Text>
                    
                </View>

                <Button 
                    title="Add to Favorites" 
                    onPress={handleAddToFavorites}
                    style={styles.button}
                />
            </View>
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
        borderBottomWidth: 3,
        borderBottomColor: 'red',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    content: {
        padding: 15,
    },
    iconContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    details: {
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10,
    },
    value: {
        fontSize: 16,
        marginBottom: 5,
    },
    button: {
        marginTop: 20,
    },
});

export default MissionDetailsScreen; 