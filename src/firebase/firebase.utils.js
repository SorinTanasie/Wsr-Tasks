import firebase from 'firebase';
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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();