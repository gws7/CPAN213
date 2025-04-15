import { FETCH_FLIGHTS, ADD_TO_FAVORITES } from './actionTypes';
import { db } from '../config/firebaseConfig';
import {collection, addDoc} from "firebase/firestore"

const favoritesCollection = "favorites";
const collectionRef = collection(db, favoritesCollection)

export const fetchFlights = () => {
    return async (dispatch) => {
        try {
            const response = await fetch('https://api.spacexdata.com/v3/launches');
            const data = await response.json();
            dispatch({ type: FETCH_FLIGHTS, payload: data });
        } catch (error) {
            console.error('Error fetching flights:', error);
        }
    };
};

export const addFav = (flight) => async dispatch => {
    try {
        console.log(`Trying to save flight to favorites: ${JSON.stringify(flight)}`);

        const flightData = {
            flightId: flight.flight_number,
            mission_name: flight.mission_name,
            launch_date: flight.launch_date_local,
            rocket_name: flight.rocket.rocket_name,
            launch_site: flight.launch_site.site_name_long,
            launch_success: flight.launch_success,
        };

        const docRef = await addDoc(collectionRef, flightData);
        console.log(`Saved to favorites with ID: ${docRef.id}`);

        dispatch({
            type: ADD_TO_FAVORITES,
            payload: {
                id: docRef.id,
                ...flightData
            }
        });

        return docRef.id;
    } catch (error) {
        console.error("Error adding to favorites: ", error);
    }
};