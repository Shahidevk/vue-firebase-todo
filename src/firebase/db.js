//import firebase from 'firebase/app';
//import 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBcOrok5qip-t5ho2o7hgBkzv2F03izeq4",
    authDomain: "vue-fire-todo-abce5.firebaseapp.com",
    projectId: "vue-fire-todo-abce5",
    storageBucket: "vue-fire-todo-abce5.appspot.com",
    messagingSenderId: "135327234368",
    appId: "1:135327234368:web:ba233ea78fd5e99e0aa2a5"
};

//export const db = firebase.initializeApp(firebaseConfig).firestore();
const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);