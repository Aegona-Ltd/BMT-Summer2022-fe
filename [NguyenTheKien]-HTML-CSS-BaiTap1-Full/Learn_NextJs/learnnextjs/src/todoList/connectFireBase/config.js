import firebase from 'firebase/compat/app';
import 'firebase/compat/database';   //import đường dẫn realtime
import 'firebase/compat/auth';   //import loginauth

// config
const config = {
    apiKey: "AIzaSyCOKKaqJCkR_maK-id909szt8JyUQhkwgI",
    authDomain: "nextjs-46cf7.firebaseapp.com",
    databaseURL: "https://nextjs-46cf7-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "nextjs-46cf7",
    storageBucket: "nextjs-46cf7.appspot.com",
    messagingSenderId: "1032596174536",
    appId: "1:1032596174536:web:924b716fdf1487890297fd",
    measurementId: "G-K2LL1KKGTQ"
};


firebase.initializeApp(config);  //kết nối firebase vs config

export const realtimeDB = firebase.database();   //realtime


export default firebase;
