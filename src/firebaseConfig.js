// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWJrXhFAMSkNeHsyM-jeSeWFEjAFeVWHY",
  authDomain: "tienda-libros-nico.firebaseapp.com",
  projectId: "tienda-libros-nico",
  storageBucket: "tienda-libros-nico.appspot.com",
  messagingSenderId: "710812082724",
  appId: "1:710812082724:web:ca4c659c0411f129caeeb1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore( app )