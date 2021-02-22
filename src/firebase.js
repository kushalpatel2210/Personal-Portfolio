
import firebase from "firebase";

// Your Credentials
var firebaseApp = firebase.initializeApp({
        // Your credentials
});

var db = firebaseApp.firestore();

export { db };

