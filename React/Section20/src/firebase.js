import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.FIREBASS_APIKEY,
  authDomain: process.env.FIREBASS_AUTHDOMAIN,
  projectId: process.env.FIREBASS_PROJECTID,
  storageBucket: process.env.FIREBASS_STORAGEBUCKET,
  messagingSenderId: process.env.FIREBASS_MESSAGINGSENDERID,
  appId: process.env.FIREBASS_APPID,
  measurementId: process.env.FIREBASS_MEASUREMENTID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
