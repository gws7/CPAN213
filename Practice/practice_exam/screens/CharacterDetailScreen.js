import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Animated, TouchableOpacity, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { addFav } from '../redux/actions';
import { Ionicons } from '@expo/vector-icons';

const CharacterDetailScreen = ({ route }) => {
    const { character } = route.params;
    const [characterDetails, setCharacterDetails] = useState(character);
    const [imageScale] = useState(new Animated.Value(1));
    const dispatch = useDispatch();

    useEffect(() => {
        // If we only received an ID, fetch the full character details
        if (typeof character === 'string') {
            fetchCharacterDetails(character);
        }
    }, [character]);

    const fetchCharacterDetails = async (characterId) => {
        try {
            const response = await fetch(`https://hp-api.onrender.com/api/character/${characterId}`);
            const data = await response.json();
            setCharacterDetails(data[0]); // API returns an array with one character
        } catch (error) {
            console.error('Error fetching character details:', error);
        }
    };

    const handleImagePress = () => {
        // Simple scale animation on image press
        Animated.sequence([
            Animated.timing(imageScale, {
                toValue: 1.2,
                duration: 200,
                useNativeDriver: true,
            }),
            Animated.timing(imageScale, {
                toValue: 1,
                duration: 200,
                useNativeDriver: true,
            }),
        ]).start();
    };

    const handleAddToFavorites = async () => {
        try {
            await dispatch(addFav(characterDetails));
            Alert.alert(
                'Success',
                `${characterDetails.name} has been added to your favorites!`,
                [{ text: 'OK' }]
            );
        } catch (error) {
            Alert.alert(
                'Error',
                'Failed to add character to favorites. Please try again.',
                [{ text: 'OK' }]
            );
        }
    };

    if (!characterDetails) {
        return (
            <View style={styles.container}>
                <Text>Loading character details...</Text>
            </View>
        );
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.imageContainer}>
                <TouchableOpacity onPress={handleImagePress}>
                    <Animated.Image
                        source={{ uri: characterDetails.image}}
                        style={[
                            styles.characterImage,
                            {
                                transform: [{ scale: imageScale }]
                            }
                        ]}
                    />
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.favoriteButton}
                    onPress={handleAddToFavorites}
                >
                    <Ionicons name="heart" size={24} color="purple" />
                    <Text style={styles.favoriteButtonText}>Add to Favorites</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.detailsContainer}>
                <DetailRow label="Name" value={characterDetails.name} />
                <DetailRow label="Year of Birth" value={characterDetails.yearOfBirth} />
                <DetailRow label="Ancestry" value={characterDetails.ancestry} />
                <DetailRow label="House" value={characterDetails.house} />
                <DetailRow label="Patronus" value={characterDetails.patronus} />
                
                {characterDetails.wand && (
                    <View style={styles.wandContainer}>
                        <Text style={styles.sectionTitle}>Wand</Text>
                        <DetailRow label="Wood" value={characterDetails.wand.wood} />
                        <DetailRow label="Core" value={characterDetails.wand.core} />
                        <DetailRow label="Length" value={characterDetails.wand.length} />
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

const DetailRow = ({ label, value }) => (
    <View style={styles.detailRow}>
        <Text style={styles.label}>{label}:</Text>
        <Text style={styles.value}>{value}</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'aliceblue',
    },
    imageContainer: {
        alignItems: 'center',
        padding: 20,
    },
    characterImage: {
        width: 200,
        height: 200,
        borderRadius: 100,
        borderWidth: 3,
        borderColor: 'purple',
    },
    favoriteButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 20,
        marginTop: 15,
        borderWidth: 1,
        borderColor: 'purple',
    },
    favoriteButtonText: {
        marginLeft: 5,
        color: 'purple',
        fontWeight: 'bold',
    },
    detailsContainer: {
        padding: 20,
    },
    detailRow: {
        flexDirection: 'row',
        marginBottom: 10,
        paddingVertical: 5,
        borderBottomWidth: 1,
        borderBottomColor: 'silver',
    },
    label: {
        fontWeight: 'bold',
        width: 120,
        fontSize: 16,
        color: 'navy',
    },
    value: {
        flex: 1,
        fontSize: 16,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 15,
        marginBottom: 10,
        color: 'purple',
    },
    wandContainer: {
        marginTop: 10,
        padding: 10,
        backgroundColor: 'lavender',
        borderRadius: 10,
    },
});

export default CharacterDetailScreen; 