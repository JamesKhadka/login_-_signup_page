// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, sendPasswordResetEmail } from "firebase/auth"; // Include sendPasswordResetEmail

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7R5iwhBMH8lPyf_mxCsFyvsdgm64g39I",
  authDomain: "page-37af8.firebaseapp.com",
  projectId: "page-37af8",
  storageBucket: "page-37af8.appspot.com",
  messagingSenderId: "623049233360",
  appId: "1:623049233360:web:b8870004f04f5fc7065fd5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Google Auth Provider
const auth = getAuth(app);  // Create an instance of Firebase Auth
const googleProvider = new GoogleAuthProvider();  // Create an instance of GoogleAuthProvider

// Export auth and googleProvider for use in your component
export { auth, googleProvider, sendPasswordResetEmail };
