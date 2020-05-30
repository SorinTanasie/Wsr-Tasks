import * as firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

const config ={
    apiKey: "AIzaSyAM3h90ROKSjig5h0WcioRNcAkmtuDwKVY",
    authDomain: "wsr-tasks.firebaseapp.com",
    databaseURL: "https://wsr-tasks.firebaseio.com",
    projectId: "wsr-tasks",
    storageBucket: "wsr-tasks.appspot.com",
    messagingSenderId: "249106599452",
    appId: "1:249106599452:web:4decc93f808c4705fc19d9",
    measurementId: "G-VYVP4X2LRG"
}
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef= firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch(error) {
            console.log('error user auth ', error.message)
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
