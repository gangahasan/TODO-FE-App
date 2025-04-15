// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlqpqJ3O7LLbg_x0Hdjobgo4t3mJC3mMA",
  authDomain: "todo-app-d837a.firebaseapp.com",
  projectId: "todo-app-d837a",
  storageBucket: "todo-app-d837a.firebasestorage.app",
  messagingSenderId: "798852109291",
  appId: "1:798852109291:web:4f91226cf973600554ffae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
