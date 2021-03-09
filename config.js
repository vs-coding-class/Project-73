import firebase from 'firebase';
require('@firebase/firestore');

const firebaseConfig = {
    apiKey: "AIzaSyB-sUL0crWzlvALPmfAa_IBy6zJNZRLOMY",
    authDomain: "project-73-4aa49.firebaseapp.com",
    projectId: "project-73-4aa49",
    storageBucket: "project-73-4aa49.appspot.com",
    messagingSenderId: "5968694898",
    appId: "1:5968694898:web:8df2fa7359e2239b1a3ceb"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();