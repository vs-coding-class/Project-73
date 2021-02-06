import firebase from 'firebase';
require('@firebase/firestore');

const firebaseConfig = {
    apiKey: "AIzaSyB_J9GQcestCK8RdViTNSRiKxnnfLXGjcU",
    authDomain: "project-73-7e256.firebaseapp.com",
    projectId: "project-73-7e256",
    storageBucket: "project-73-7e256.appspot.com",
    messagingSenderId: "832932987270",
    appId: "1:832932987270:web:97ea2b5acd76a7f9c22c07"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();