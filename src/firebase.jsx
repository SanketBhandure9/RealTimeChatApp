import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBEnMaLPlEhcLU7_RGCioXvldiDXzVLdrU",
  authDomain: "realtimechatapp-de5fa.firebaseapp.com",
  projectId: "realtimechatapp-de5fa",
  storageBucket: "realtimechatapp-de5fa.appspot.com",
  messagingSenderId: "362656486287",
  appId: "1:362656486287:web:5502e77d526ebeab55f1fa",
  measurementId: "G-W2CBQBV0BS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
