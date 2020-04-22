import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

let config = {
    apiKey: "AIzaSyCvKivBAvwoJNoqWApxYtHnOMA7qQTwan8",
    authDomain: "bolaoamigoloteria.firebaseapp.com",
    databaseURL: "https://bolaoamigoloteria.firebaseio.com",
    projectId: "bolaoamigoloteria",
    storageBucket: "bolaoamigoloteria.appspot.com",
    messagingSenderId: "570632020463",
    appId: "1:570632020463:web:d26862b0fe074378c6561a",
    measurementId: "G-X463MD1879"
  };
  // Initialize Firebase
  firebase.initializeApp(config);

  export default firebase;