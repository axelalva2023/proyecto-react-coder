import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBo09oIaudktOJtYfy9OQ_IvzDzIuFcQ84",
  authDomain: "proyecto-react-coder-e23c8.firebaseapp.com",
  projectId: "proyecto-react-coder-e23c8",
  storageBucket: "proyecto-react-coder-e23c8.firebasestorage.app",
  messagingSenderId: "838833145793",
  appId: "1:838833145793:web:e028215ba54be4de8d1140"
};

export const app = initializeApp(firebaseConfig);
