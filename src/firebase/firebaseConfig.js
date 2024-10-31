
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import  AsyncStorage  from "@react-native-async-storage/async-storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8siPOoGkc2bZyz_yUndqUNCdAJXrcOZQ",
  authDomain: "app-firebase-ed544.firebaseapp.com",
  projectId: "app-firebase-ed544",
  storageBucket: "app-firebase-ed544.appspot.com",
  messagingSenderId: "1010849674311",
  appId: "1:1010849674311:web:bda6d0795a33be65926d62"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth (app,{
  persistence: getReactNativePersistence(AsyncStorage)
})
export{auth}
