import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBqTiLA_GoDjZ4LPR5TqIOLrT6QnLe3Rsc",
    authDomain: "jobcheck-admin-portal.firebaseapp.com",
    projectId: "jobcheck-admin-portal",
    storageBucket: "jobcheck-admin-portal.appspot.com",
    messagingSenderId: "213896244230",
    appId: "1:213896244230:web:10d3b0eda11e12e0ac6787"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();

  export default db