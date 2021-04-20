import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyD3_xavdUmGWcbe9ZZCxp8mRXtdameKUWA',
  authDomain: 'bosselijah-crwn.firebaseapp.com',
  projectId: 'bosselijah-crwn',
  storageBucket: 'bosselijah-crwn.appspot.com',
  messagingSenderId: '658885131319',
  appId: '1:658885131319:web:141b1485cbc36e37c493b2',
  measurementId: 'G-72S003S8FS',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
