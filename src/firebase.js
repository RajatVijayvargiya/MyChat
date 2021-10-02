import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyBMJ-9iuygHRu1bmiUWthCS4CFBSJXjfmM",
    authDomain: "mychat-4eb0a.firebaseapp.com",
    projectId: "mychat-4eb0a",
    storageBucket: "mychat-4eb0a.appspot.com",
    messagingSenderId: "552394217006",
    appId: "1:552394217006:web:152532c6b86a9887eff1bf"
  }).auth();