import firebase from "firebase";
import 'firebase/firestore';
import 'firebase/storage';



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDWQcLJQ52wrHYzDLCRDJOcvEYt3KoXK38",
    authDomain: "news-e8510.firebaseapp.com",
    projectId: "news-e8510",
    storageBucket: "news-e8510.appspot.com",
    messagingSenderId: "804565595163",
    appId: "1:804565595163:web:ea36b124681082932ff4be",
    measurementId: "G-TVMGN16ENM"
  };


const firebaseApp =firebase.initializeApp(firebaseConfig);

const db =firebaseApp.firestore();

const storage=firebase.storage();

const timeStamp=firebase.firestore.FieldValue.serverTimestamp;

export {db,storage,timeStamp};
