import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeGC5ioSXVJmr30FTHlrWs5zjHsRBdKek",
  authDomain: "xpressmeal-ea214.firebaseapp.com",
  projectId: "xpressmeal-ea214",
  storageBucket: "xpressmeal-ea214.appspot.com",
  messagingSenderId: "334921260732",
  appId: "1:334921260732:web:a173bda97c3678ef4b7ab9",
  measurementId: "G-9GMVT16ZMQ",
};

// Initialize Firebase
let app;
if (!firebase.apps.length) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };
