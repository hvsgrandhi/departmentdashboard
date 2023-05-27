
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
  //firebase config here
  databaseURL:''//realtime database link here
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
