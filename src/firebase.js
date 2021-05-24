import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBLdwb1UA9lFYEzvf4o6FcQhXHNDdM4D-o",
    authDomain: "tinder-app-e282e.firebaseapp.com",
    projectId: "tinder-app-e282e",
    storageBucket: "tinder-app-e282e.appspot.com",
    messagingSenderId: "306192925007",
    appId: "1:306192925007:web:329f1ba82f074e182fc53a"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const database = firebaseApp.firestore();

  export default database;