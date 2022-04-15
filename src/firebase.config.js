// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEy_Xuf-TQnbnYKVrUWRS6aUrsXQNZAJ4",
  authDomain: "smart-shopping-3dd6f.firebaseapp.com",
  projectId: "smart-shopping-3dd6f",
  storageBucket: "smart-shopping-3dd6f.appspot.com",
  messagingSenderId: "91350029666",
  appId: "1:91350029666:web:6a3f20da06d953807ac83b",
  measurementId: "G-MQPJGPP7CM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
export default fireDB;
