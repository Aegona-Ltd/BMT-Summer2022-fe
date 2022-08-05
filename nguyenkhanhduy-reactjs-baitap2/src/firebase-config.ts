// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyA-DI5FwINQCovl3jiTpLSJg48zyTEsavQ",
  authDomain: "music-app-4e331.firebaseapp.com",
  databaseURL: "https://music-app-4e331-default-rtdb.firebaseio.com",
  projectId: "music-app-4e331",
  storageBucket: "music-app-4e331.appspot.com",
  messagingSenderId: "1061581034221",
  appId: "1:1061581034221:web:7fc52630f9b207587cf2e4",
  measurementId: "G-RK323VPTWQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app)
