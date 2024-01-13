// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB_GnaitEMyq7xWlFQtyZusptMqe3_Kjik",
    authDomain: "facebook-clone-6d05b.firebaseapp.com",
    projectId: "facebook-clone-6d05b",
    storageBucket: "facebook-clone-6d05b.appspot.com",
    messagingSenderId: "485382161715",
    appId: "1:485382161715:web:96ddf852d5ae73df342a46",
    measurementId: "G-W9XF3R8VT8"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;