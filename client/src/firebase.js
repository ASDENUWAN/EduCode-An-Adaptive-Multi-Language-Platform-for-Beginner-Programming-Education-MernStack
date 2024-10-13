// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "educode-3f32e.firebaseapp.com",
  projectId: "educode-3f32e",
  storageBucket: "educode-3f32e.appspot.com",
  messagingSenderId: "1024395212378",
  appId: "1:1024395212378:web:b423b6d201373e5fee8a63"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);