import { initializeApp } from "firebase/app";
import { initializeAuth } from 'firebase/auth';
import { getAuth } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from "firebase/firestore";
import { getReactNativePersistence } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDjDqXgt43XBtQ607UeLomRc_Z86fLAWgM",
  authDomain: "in-drive-clone.firebaseapp.com",
  projectId: "in-drive-clone",
  storageBucket: "in-drive-clone.firebasestorage.app",
  messagingSenderId: "278214674959",
  appId: "1:278214674959:web:27401dee1d9a3d8c09317a",
  measurementId: "G-JDQ9YYFGED"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export const db = getFirestore(app);

export { auth };
