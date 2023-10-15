// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsahquWdDCs8QR85YCk4lQXCYdWclvNJE",
  authDomain: "shreerahul-portfolio.firebaseapp.com",
  projectId: "shreerahul-portfolio",
  storageBucket: "shreerahul-portfolio.appspot.com",
  messagingSenderId: "143239484543",
  appId: "1:143239484543:web:257d2feaa940b280175b4a",
  measurementId: "G-JX42YLVR12",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore();
