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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('Error creating user! Message:', error.message);
    }
  }

  return userRef;
};

if (!firebase.apps.length) {
  // @TODO This if/else statement is not anything Yihua did. It is an answer
  // from Stackoverflow (next line):
  // https://stackoverflow.com/questions/43331011/firebase-app-named-default-already-exists-app-duplicate-app
  firebase.initializeApp(config);
} else {
  firebase.app();
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
