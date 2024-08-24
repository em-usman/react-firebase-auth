import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"


const firebaseConfig = {
  apiKey: "AIzaSyCp2H5ZV-XKV5ZqjaCzTjL8TzlpNPz3OfQ",
  authDomain: "react-firebase-auth-31d5f.firebaseapp.com",
  projectId: "react-firebase-auth-31d5f",
  storageBucket: "react-firebase-auth-31d5f.appspot.com",
  messagingSenderId: "915197204509",
  appId: "1:915197204509:web:8d52c2efc691c3d8e7cef4",
  measurementId: "G-W4BXRZ1FBK",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);