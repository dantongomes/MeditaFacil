
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import  AsyncStorage  from "@react-native-async-storage/async-storage";

// TODO: Add SDKs for Firebase products that you want to use
 

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmePy4TGBXFGOfiM4IDzUrKwaYtcs9-1k",
  authDomain: "meditafacil-eb13a.firebaseapp.com",
  databaseURL: "https://meditafacil-eb13a-default-rtdb.firebaseio.com",
  projectId: "meditafacil-eb13a",
  storageBucket: "meditafacil-eb13a.appspot.com",
  messagingSenderId: "228029762240",
  appId: "1:228029762240:web:86bbfc933c68298f3dbb25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth (app,{
  persistence: getReactNativePersistence(AsyncStorage)
})
export{auth}
