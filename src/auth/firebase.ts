import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyCXF9luzhxHGRghah_HSDJufvgR-aR3HMw",
    authDomain: "synergy-hub-40575.firebaseapp.com",
    projectId: "synergy-hub-40575",
    storageBucket: "synergy-hub-40575.firebasestorage.app",
    messagingSenderId: "210822707927",
    appId: "1:210822707927:web:3e79351c4485b8d2a0ce92",
    measurementId: "G-MS3TQNVZXJ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
