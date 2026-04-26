// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyAA1O-O_b8Qf_9IcSrXEbqbsvguHcg1Heg",
    authDomain: "todo-market-e20e2.firebaseapp.com",
    projectId: "todo-market-e20e2",
    storageBucket: "todo-market-e20e2.firebasestorage.app",
    messagingSenderId: "105028403738",
    appId: "1:105028403738:web:8cd0054ac0cc431afb47a3",
    measurementId: "G-WHQ6BR9YCD"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);