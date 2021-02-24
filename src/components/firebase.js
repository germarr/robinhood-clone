// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyCgV2qLS4gFuMeffk40U2zqLNPWKkRS_f8",
    authDomain: "robinhood-clone-a56b1.firebaseapp.com",
    projectId: "robinhood-clone-a56b1",
    storageBucket: "robinhood-clone-a56b1.appspot.com",
    messagingSenderId: "377762326939",
    appId: "1:377762326939:web:a5dbdf44f5b2bc607e593e",
    measurementId: "G-M9S71YN3S3"
  };

const fireBaseApp = firebase.initializeApp(firebaseConfig);

const db = fireBaseApp.firestore();

export { db };