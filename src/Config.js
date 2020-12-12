// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "firebase/database";



const firebaseConfig = {
  apiKey: "AIzaSyAI0UMtPdbN7sJbO3bV1_QmNxsh3u5MJ4E",
  authDomain: "book-store-8957a.firebaseapp.com",
  databaseURL: "https://book-store-8957a.firebaseio.com",
  projectId: "book-store-8957a",
  storageBucket: "book-store-8957a.appspot.com",
  messagingSenderId: "571892924334",
  appId: "1:571892924334:web:879f0a0022404db946523f",
  measurementId: "G-K9CCY6NNPW"
};

// Initialize Firebase


  const app = firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  const auth = firebase.auth();



export { auth, db, app, firebase as default };

