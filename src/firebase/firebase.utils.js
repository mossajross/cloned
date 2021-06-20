import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD1jC207O9ilFZmvIX4ROOrqTY9ei64A8Y",
  authDomain: "crown-db-7faa6.firebaseapp.com",
  projectId: "crown-db-7faa6",
  storageBucket: "crown-db-7faa6.appspot.com",
  messagingSenderId: "273004510994",
  appId: "1:273004510994:web:00d39df972e2328258bdcb",
  measurementId: "G-G3S6GQTZDM",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
