import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDeGC5ioSXVJmr30FTHlrWs5zjHsRBdKek",
  authDomain: "xpressmeal-ea214.firebaseapp.com",
  projectId: "xpressmeal-ea214",
  storageBucket: "xpressmeal-ea214.appspot.com",
  messagingSenderId: "334921260732",
  appId: "1:334921260732:web:a173bda97c3678ef4b7ab9",
  measurementId: "G-9GMVT16ZMQ",
};

if (!firebase.apps.lenght) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
