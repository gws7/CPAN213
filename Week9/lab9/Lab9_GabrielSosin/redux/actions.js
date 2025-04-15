import { ADD_BOOK, FETCH_BOOKS } from "./actionTypes";

import { db } from "../config/firebaseConfig";
import { collection, addDoc, updateDoc, deleteDoc, doc, onSnapshot } from "firebase/firestore";

const bookCollection = "books";
const collectionRef = collection(db, bookCollection)

export const addBook = (book) => async dispatch => {
    try {
        const docRef = await addDoc(collectionRef, book)
        console.log(`Document saved successfully: ${docRef}`)

        dispatch({
            type:ADD_BOOK,
            payload: {
                id: docRef.id,
                ...book
            }
        })
    } catch (error) {
        console.error("Error adding: ", error)
    }
}

export const fetchBooks = () => async dispatch => {
    try {
        console.log("Fetching from database")

        const dataListener = onSnapshot(collectionRef, snapshot => {
            const bookList = snapshot.docs.map( (doc)=>(
                {
                    id: doc.id,
                    ...doc.data()
                }
            ))

            dispatch({
                type:FETCH_BOOKS,
                payload:bookList
            })
        })
        return dataListener
        
    } catch (error) {
        console.error("Error fetching books: ", error)
    }
}
