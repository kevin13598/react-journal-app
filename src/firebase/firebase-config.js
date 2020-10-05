import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    databaseURL:process.env.REACT_APP_DATABASEURL,
    projectId: process.env.REACT_APP_PROJECTID,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
    appId:process.env.REACT_APP_APPID
  };

  /* var firebaseConfigTesting = {
    apiKey: "AIzaSyAgCFqGXrVYvDlZEwUsWECkTDNWypYajTg",
    authDomain: "axios-244e4.firebaseapp.com",
    databaseURL: "https://axios-244e4.firebaseio.com",
    projectId: "axios-244e4",
    storageBucket: "axios-244e4.appspot.com",
    messagingSenderId: "939348337156",
    appId: "1:939348337156:web:587e7f0223aa561de98b51"
  }; */

 /*  if (process.env.NODE_ENV === 'test') {
      
    firebase.initializeApp(firebaseConfigTesting);
    
  }else{
      
      firebase.initializeApp(firebaseConfig);
  } */

  firebase.initializeApp(firebaseConfig);



  const db = firebase.firestore();

  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export {
      db,
      googleAuthProvider,
      firebase
  }