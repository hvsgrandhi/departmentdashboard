// import firebase from './firebaseConfig';
// import React from 'react'

// export default function test() {

//     const placements = [
//         { year: 2021, student: 'John', company: 'ABC Corp', package: '10 LPA' },
//         { year: 2021, student: 'Alice', company: 'XYZ Corp', package: '12 LPA' },
//         { year: 2022, student: 'Bob', company: 'PQR Corp', package: '8 LPA' },
//         { year: 2022, student: 'Sarah', company: 'MNO Corp', package: '9 LPA' },
//         // ... add more placement objects here
//       ];
//     // Assuming `placements` is an array of placement objects
//     placements.forEach((placement) => {
//       console.log("Testl0");
//         firebase.database().ref('placements').push(placement);
//       });

//   return (
//     <div>test</div>
//   )
// }

// import firebase from "../firebase";
import database from '../firebase';
export const uploadDataToFirebase = async (data) => {

  const placementsRef = database.ref("placements");

  try {
    await placementsRef.set(data);
    console.log("Data uploaded successfully!");
  } catch (error) {
    console.error("Error uploading data:", error);
  }
};
