// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
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
const auth = getAuth(app);

const registerWithEmailAndPassword = async (email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    return user
  } catch (err) {
    console.log(err)
  }

}

const loginWithEmailAndPassword = async (email, password) => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    return res;
  } catch (error) {
    console.log(error)
  }
}

const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email)
  } catch (error) {

    console.log(error)
  }
}

export { registerWithEmailAndPassword, loginWithEmailAndPassword, auth, sendPasswordReset }