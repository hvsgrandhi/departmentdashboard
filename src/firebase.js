
//firebase

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
// import firebase from 'firebase/app';
// import 'firebase/database';


// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZAaJRAM96oBqqRU_Dwt7rUCpw7BSTsQ0",
  authDomain: "departmentdashboard-dec42.firebaseapp.com",
  projectId: "departmentdashboard-dec42",
  storageBucket: "departmentdashboard-dec42.appspot.com",
  messagingSenderId: "158914228853",
  appId: "1:158914228853:web:ebd884de4929da4bce7e3c",
  measurementId: "G-03QKLF80GD",
  databaseURL:'https://departmentdashboard-dec42-default-rtdb.asia-southeast1.firebasedatabase.app'
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }

// const db = firebase.firestore();
firebase.initializeApp(firebaseConfig);
export const messaging = getMessaging(app);
const database = firebase.database();

export default database;
// export default firebase;
