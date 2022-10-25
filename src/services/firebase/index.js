import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyAS85N6jqUIvLP3h2l7tE53y_wQkKOUEKY",
  authDomain: "backendreact-fa9c0.firebaseapp.com",
  projectId: "backendreact-fa9c0",
  storageBucket: "backendreact-fa9c0.appspot.com",
  messagingSenderId: "775717253981",
  appId: "1:775717253981:web:d607e73e2921927e4daeb4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)