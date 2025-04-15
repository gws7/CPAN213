import { 
    ADD_TASK, 
    EDIT_TASK, 
    DELETE_TASK,
    FETCH_TASKS,
} from './actionTypes';

import { db } from '../config/firebaseConfig';
import { collection, addDoc, updateDoc, deleteDoc, doc, onSnapshot, query, orderBy, Timestamp } from 'firebase/firestore';

const parkingCollection = "parkings";
const collectionRef = collection(db, parkingCollection);

//All the database operations must be performed asynchronously 
export const addTask = (task) => async dispatch => {
    try {
        console.log(`Trying to save parking to database : ${JSON.stringify(task)}`);

        const taskWithTimestamp = {
            ...task,
            dateTime: Timestamp.fromDate(task.dateTime)
        };

        //Gets a reference of the document to be added
        const docRef = await addDoc(collectionRef, taskWithTimestamp) //Here we are trying to add a new doc using the set collection
        console.log(`Document saved successfully: ${docRef}`)

        //Dispatch the action to reducer so that the state can be updated
        dispatch({
            type: ADD_TASK,
            payload: {
                id: docRef.id, //Get the document id to be used for update and 
                ...task,
                dateTime: task.dateTime.toISOString() // Convert to ISO string for Redux
            }
        });
    } catch (error) {
        console.error("Error adding parking: ", error);
    }
};

export const fetchTasks = () => async dispatch => {
    try {
        console.log(`Trying to fetch parking records from database.`);

        //Listen to data and fethc it with specific order
        const q = query(collectionRef, orderBy('dateTime', 'desc'));
        const dataListener = onSnapshot(q, snapshot => {
            //Data is received in snapshot
            //Perform necessary Operations

            const taskList = snapshot.docs.map((doc) => {
                const data = doc.data();
                return {
                    id: doc.id,
                    ...data,
                    dateTime: data.dateTime?.toDate?.()?.toISOString() || new Date().toISOString() // Convert to ISO string for Redux
                };
            });

            //Dispatch action
            dispatch({
                type: FETCH_TASKS,
                payload: taskList
            });
        });

        return dataListener;
    } catch (error) {
        console.error("Error fetching parking records: ", error);
    }
};

export const editTask = (updatedTask) => async dispatch => {
    try {
        console.log(`Trying to update parking record: ${JSON.stringify(updatedTask)}`);

        //Get the document reference to edit
        const docRef = doc(collectionRef, updatedTask.id)

        //Extract the fields to modify EXCEPT for ID thats why we have _
        const {id: _, ...filteredTask} = updatedTask

        //Update the doc in the database
        await updateDoc(docRef, filteredTask)
        dispatch({
            type: EDIT_TASK,
            payload: {
                id: updatedTask.id,
                updatedTask
            }
        })
    } catch (error) {
        console.error("Error updating parking record: ", error);
    }
};

export const deleteTask = (taskId) => async dispatch => {
    try {
        console.log(`Trying to delete parking record with ID: ${taskId}`);
        const docRef = doc(collectionRef, taskId)
        await deleteDoc(docRef)
        dispatch({
            type: DELETE_TASK,
            payload: taskId
        })
    } catch (error) {
        console.error("Error deleting parking record: ", error);
    }
};


