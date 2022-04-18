import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
 apiKey: "AIzaSyDW8mvWzN-GKwvKDkB3mgZm1ER6ReUMqec",
 authDomain: "end-of-journey-c0bc7.firebaseapp.com",
 projectId: "end-of-journey-c0bc7",
 storageBucket: "end-of-journey-c0bc7.appspot.com",
 messagingSenderId: "124527430277",
 appId: "1:124527430277:web:b0d980fed3171ed1b477ec",
 measurementId: "G-5MPND5M3RH"
};

// eslint-disable-next-line no-unused-vars
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;