import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyB1zDh8BjzlN0D1nlfXAPyhFBEaHh8fudM",
    authDomain: "disney-plusclone-6f1c5.firebaseapp.com",
    projectId: "disney-plusclone-6f1c5",
    storageBucket: "disney-plusclone-6f1c5.appspot.com",
    messagingSenderId: "66498791268",
    appId: "1:66498791268:web:df1cb2484a6d95d8175c71",
    measurementId: "G-863G2KZ7ZY"
};



const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export {auth,provider};

export default db;