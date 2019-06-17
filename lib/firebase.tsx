import firebase from 'firebase/app';
import 'firebase/firestore'

export function loadFirebase() {
  try {
    const firebaseConfig = {
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      databaseURL: process.env.FIREBASE_DATABASE_URL,
      projectId: process.env.FIREBASE_PROJECT_ID,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.FIREBASE_APP_ID
    };
    firebase.initializeApp(firebaseConfig);
    // firebase.firestore().settings({timestampsInSnapshots: true});
  } catch (err) {
    if (err.message) {
      // console.log('err.message', err.message)
      // console.error('app already exists')
    }
  }
  return firebase;
}