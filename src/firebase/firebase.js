// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_blgr5hakIIg8K4ygkHdcB9xm7e-VgbI",
  authDomain: "superapp-fda4c.firebaseapp.com",
  projectId: "superapp-fda4c",
  storageBucket: "superapp-fda4c.appspot.com",
  messagingSenderId: "289816938731",
  appId: "1:289816938731:web:52982739939b4d052c16ae",
  measurementId: "G-95T5WQ0YBT"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);