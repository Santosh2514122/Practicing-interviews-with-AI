
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-12e2e.firebaseapp.com",
  projectId: "interviewiq-12e2e",
  storageBucket: "interviewiq-12e2e.firebasestorage.app",
  messagingSenderId: "639039269855",
  appId: "1:639039269855:web:83a16dec993966e1c8326a"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}