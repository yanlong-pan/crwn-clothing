import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyDGWpJZffwELX7mxTfLjUutZtbnzIEufu0",
    authDomain: "crwn-db-b0b78.firebaseapp.com",
    databaseURL: "https://crwn-db-b0b78.firebaseio.com",
    projectId: "crwn-db-b0b78",
    storageBucket: "crwn-db-b0b78.appspot.com",
    messagingSenderId: "937493334655",
    appId: "1:937493334655:web:81c0a17df4710c38784d4a"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;