import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY, 
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN, 
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID, 
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET, 
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID, 
    appId: process.env.REACT_APP_FIREBASE_APP_ID, 
    measurementId: process.env.REACT_APP_MEASUREMENT_ID 
}

export const createUserProfileDocument = async  (userAuth, additionalData) => {
    if (!userAuth) return; // user auth object does not exist
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    // console.log(snapShot);

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName, 
                email,  
                createdAt,  
                ...additionalData
            })
        } catch (error) {
            console.log('Error creating profile document', error.message);
        }
    }

    return userRef;
};

// Code to add local collection data to firebase
export const addCollectionAndDocuments = async (collectionKey, objectToAdd) => {
    const  collectionRef = firestore.collection(collectionKey);
    // console.log("adding to " + collectionRef);
    const batch = firestore.batch();
    objectToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
    });

    return await batch.commit();
};

// Code to read the shop data from firebase
export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
        const { title, items } = doc.data();

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        };
    });

    // console.log(transformedCollection);
    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.routeName] = collection;
        return accumulator;
    }, {});
};

// Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;