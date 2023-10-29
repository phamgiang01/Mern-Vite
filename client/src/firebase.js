// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnntWj-7906TAc34QIpuvdpBKpk86fmbY",
  authDomain: "mern-easte.firebaseapp.com",
  projectId: "mern-easte",
  storageBucket: "mern-easte.appspot.com",
  messagingSenderId: "200478232381",
  appId: "1:200478232381:web:50c44ed572cf38bb36bf54",
  measurementId: "G-VJT5J8M2W8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);