import firebase from "@firebase/app";
import "@firebase/auth";
import "@firebase/firestore";
import "@firebase/storage";

// Your web app's Firebase configuration, which you copy-pasted from Step 6
var firebaseConfig = {
  apiKey: "AIzaSyDSbGh0KJIvZlW7aVn_pqHbVq7zMgi8HaU",
  authDomain: "chillah-s.firebaseapp.com",
  projectId: "chillah-s",
  storageBucket: "chillah-s.appspot.com",
  messagingSenderId: "871519700170",
  appId: "1:871519700170:web:6b482bfb7a236cc8676033",
  measurementId: "G-59WRCVRFTX"
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);
let firestore = firebase.firestore();

export default firestore;
