import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

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

// Google Sign-In
export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user;
  } catch (error) {
    if (error.code === 'auth/popup-closed-by-user') {
      console.error('The popup was closed before completing the sign-in.');
    } else {
      console.error(error);
    }
    throw error;
  }
};