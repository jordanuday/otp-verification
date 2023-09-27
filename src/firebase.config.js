// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtTEYXb9FHMRhlQ1IRffqA-8V9W5q-4gk",
  authDomain: "otp-project-8d106.firebaseapp.com",
  projectId: "otp-project-8d106",
  storageBucket: "otp-project-8d106.appspot.com",
  messagingSenderId: "164110731517",
  appId: "1:164110731517:web:947f30e0da1ec71b7e5694",
  measurementId: "G-177K725EWP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

