import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCR6AJilwkYHWO-OzDBxDzXxcEeAL5b6hs",
  authDomain: "fb-messenger-8770e.firebaseapp.com",
  databaseURL: "https://fb-messenger-8770e.firebaseio.com",
  projectId: "fb-messenger-8770e",
  storageBucket: "fb-messenger-8770e.appspot.com",
  messagingSenderId: "169785500177",
  appId: "1:169785500177:web:853478f66dd44f1e1707b0",
  measurementId: "G-ESWGF1FFBB"
})

const db = firebaseApp.firestore()
export default db