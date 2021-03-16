import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAi8wuxi08ypZtp9pZvGqTocHS6ls2kIvs",
  authDomain: "clone-16015.firebaseapp.com",
  projectId: "clone-16015",
  storageBucket: "clone-16015.appspot.com",
  messagingSenderId: "24999238012",
  appId: "1:24999238012:web:96abec4c693bdcd5bbecf9",
  measurementId: "G-1S49F4YCKE",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
