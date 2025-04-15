import { FETCH_CHARACTERS, ADD_TO_FAVORITES } from './actionTypes';
import { db } from "../config/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

const favoritesCollection = "favorites";
const collectionRef = collection(db, favoritesCollection);

export const fetchCharacters = () => {
    return async (dispatch) => {
        try {
            const response = await fetch('https://hp-api.onrender.com/api/characters/house/gryffindor');
            const data = await response.json();
            dispatch({ type: FETCH_CHARACTERS, payload: data });
        } catch (error) {
            console.error('Error fetching characters:', error);
        }
    };
};

export const addFav = (character) => async dispatch => {
    try {
        console.log(`Trying to save character to favorites: ${JSON.stringify(character)}`);

        // Prepare the character data for Firestore
        const characterData = {
            characterId: character.name,
            name: character.name,
            house: character.house,
            image: character.image,
            yearOfBirth: character.yearOfBirth,
            ancestry: character.ancestry,
            patronus: character.patronus,
            wand: character.wand,
            addedAt: new Date().toISOString()
        };

        const docRef = await addDoc(collectionRef, characterData);
        console.log(`Saved to favorites with ID: ${docRef.id}`);

        dispatch({
            type: ADD_TO_FAVORITES,
            payload: {
                id: docRef.id,
                ...characterData
            }
        });

        return docRef.id;
    } catch (error) {
        console.error("Error adding to favorites: ", error);
        throw error;
    }
};