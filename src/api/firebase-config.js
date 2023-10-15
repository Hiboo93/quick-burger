// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const apiKey = import.meta.env.VITE_REACT_APP_API_KEY
const authDomain = import.meta.env.VITE_REACT_APP_AUTH_DOMAIN
const projectId = import.meta.env.VITE_REACT_APP_PROJECT_ID
const storageBucket = import.meta.env.VITE_REACT_APP_STORAGE_BUCKET
const messagingSenderId = import.meta.env.VITE_REACT_APP_MESSAGING_SENDER_ID
const appId = import.meta.env.VITE_REACT_APP_APP_ID

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: apiKey,
  authDomain: authDomain,
  projectId: projectId,
  storageBucket: storageBucket,
  messagingSenderId: messagingSenderId,
  appId: appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);// pour se connecter à notre  compte firebase
export const db = getFirestore(app);// pour se connecter à notre BDD Firestore