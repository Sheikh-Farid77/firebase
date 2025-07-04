// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDS9WIgVOZOpBCSaudrDNcHcDXki6Nkne8",
  authDomain: "simple-firebase-87eac.firebaseapp.com",
  projectId: "simple-firebase-87eac",
  storageBucket: "simple-firebase-87eac.firebasestorage.app",
  messagingSenderId: "260856128218",
  appId: "1:260856128218:web:7cedb43503b642859cbbe3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app