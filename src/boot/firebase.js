// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/database";

var firebaseConfig = {
  apiKey: "AIzaSyCxgA8k_0s9ZndchZDcvfIJZTMoluXuPKo",
  authDomain: "amigo-ab165.firebaseapp.com",
  projectId: "amigo-ab165",
  storageBucket: "amigo-ab165.appspot.com",
  messagingSenderId: "107578810241",
  appId: "1:107578810241:web:c256a95d9ee5ed6a9c9280",
  measurementId: "G-VC7HH6FW2F"
};
// Initialize Firebase
let firebaseApp = firebase.initializeApp(firebaseConfig);
let firebaseAuth = firebaseApp.auth()
let firebaseDb = firebaseApp.database()
firebase.analytics();

export { firebaseAuth, firebaseDb }