// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAf64O77yNuDOJXYvQTOzNANs3DA7S53F4",
  authDomain: "lurrytoken.firebaseapp.com",
  projectId: "lurrytoken",
  storageBucket: "lurrytoken.appspot.com",
  messagingSenderId: "1097511317110",
  appId: "1:1097511317110:web:8a8b0bd8f0a3b5e933b957",
  measurementId: "G-KNXKX3QFDB",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
