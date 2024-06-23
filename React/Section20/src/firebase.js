import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBaO3W10mUW_5zA-AGxXLjq_J5nINqd4Bg",
  authDomain: "section20-772c8.firebaseapp.com",
  projectId: "section20-772c8",
  storageBucket: "section20-772c8.appspot.com",
  messagingSenderId: "513745400577",
  appId: "1:513745400577:web:470dbaece9166720cbe100",
  measurementId: "G-ZZPJF3PB1E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
