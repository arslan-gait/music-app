import firebase from 'firebase'

let firebaseConfig = {
    apiKey: "AIzaSyB6pMgpy5rylB_b-l4WQrgSaS1YMapoHPU",
    authDomain: "music-app-83095.firebaseapp.com",
    projectId: "music-app-83095",
    storageBucket: "music-app-83095.appspot.com",
    messagingSenderId: "1085285887036",
    appId: "1:1085285887036:web:138913ae02033fe2f5e739",
    measurementId: "G-MD0ZHLGJGP"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
