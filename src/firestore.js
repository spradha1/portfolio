import firebase from 'firebase/app';

var config = {
  apiKey: "AIzaSyDeDlFcfLunWVIzITIBayO3orY7qrDPPWg",
  authDomain: "portfolio-sanjiv.firebaseapp.com",
  databaseURL: "https://portfolio-sanjiv.firebaseio.com",
  projectId: "portfolio-sanjiv",
  storageBucket: "portfolio-sanjiv.appspot.com",
  messagingSenderId: "189591057922",
  appId: "1:189591057922:web:d04ac6d45a19cd460b991b"
};

firebase.initializeApp(config);
export default firebase;