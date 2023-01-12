// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore} from 'firebase/firestore';
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlSHdXrcoGd0Dkqqz0cwtoOGMKfnqLask",
  authDomain: "twitter-clone-f671c.firebaseapp.com",
  projectId: "twitter-clone-f671c",
  storageBucket: "twitter-clone-f671c.appspot.com",
  messagingSenderId: "447644763418",
  appId: "1:447644763418:web:5bbde451ae500f55e6d8a3",
  measurementId: "G-H3NQGT6D1Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app); 

const db = getFirestore(app);



export {db};