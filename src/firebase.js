// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDB5lnaXFn0P-cxXj20EhWcpbh2CaXw4dA",
  authDomain: "noteku-6a5d5.firebaseapp.com",
  projectId: "noteku-6a5d5",
  storageBucket: "noteku-6a5d5.appspot.com",
  messagingSenderId: "348231134668",
  appId: "1:348231134668:web:3aeaf6eefe886433ca0169",
  measurementId: "G-7BH64K6LW8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
