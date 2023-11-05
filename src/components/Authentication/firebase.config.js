// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQIdG94JNz4J9FiwdQ23tCUUdhW6MEYcY",
  authDomain: "agni-2-31315.firebaseapp.com",
  projectId: "agni-2-31315",
  storageBucket: "agni-2-31315.appspot.com",
  messagingSenderId: "980014166230",
  appId: "1:980014166230:web:d9445c50331ec08fd9d977"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth