
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig =
 {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "iqbuild-ee49b.firebaseapp.com",
  projectId: "iqbuild-ee49b",
  storageBucket: "iqbuild-ee49b.firebasestorage.app",
  messagingSenderId: "730019959864",
  appId: "1:730019959864:web:8c99d836cc654c3b9f82cd"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}