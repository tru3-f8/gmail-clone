import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDIAu4_Vk9aKvUloZfZTSxxxbfc2E1caxg",
    authDomain: "clone-45897.firebaseapp.com",
    projectId: "clone-45897",
    storageBucket: "clone-45897.appspot.com",
    messagingSenderId: "390631062295",
    appId: "1:390631062295:web:63b5de13716351bc31d552"
  };

  //Connect the front end to the backend
  const firebaseApp = firebase.initializeApp(firebaseConfig)

  //Firestore is the database
  const db = firebaseApp.firestore();

  //Set up authentication
  const auth = firebase.auth();

  //Google auth provider
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, provider };