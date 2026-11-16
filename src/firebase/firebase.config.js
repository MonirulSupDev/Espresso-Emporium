// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBW2K89webEmhBNbTw9EzQidjWmREkgdXg",
  authDomain: "espresso-emporium-97387.firebaseapp.com",
  projectId: "espresso-emporium-97387",
  storageBucket: "espresso-emporium-97387.firebasestorage.app",
  messagingSenderId: "485045550463",
  appId: "1:485045550463:web:d421274edfed7145862e4a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;