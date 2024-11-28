// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAc8Z7YzxK8lDE7LPaaualsZj9dPyrxbfg",
  authDomain: "lingo-bingo-language-learning.firebaseapp.com",
  projectId: "lingo-bingo-language-learning",
  storageBucket: "lingo-bingo-language-learning.firebasestorage.app",
  messagingSenderId: "163980965193",
  appId: "1:163980965193:web:9c05bce8719d0f199dd698"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app; 