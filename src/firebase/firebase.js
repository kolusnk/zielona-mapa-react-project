// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {

    apiKey: "AIzaSyC6Rve0xEa6K_AZigexjTkBvFpRib3D9WU",

    authDomain: "zielona-mapa.firebaseapp.com",

    projectId: "zielona-mapa",

    storageBucket: "zielona-mapa.appspot.com",

    messagingSenderId: "728942758845",

    appId: "1:728942758845:web:c7dcb551cbe0a8e89220d4"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
export default getFirestore();