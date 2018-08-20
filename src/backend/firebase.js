import firebase from 'firebase/app'
import 'firebase/firestore'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBUKcW_W14-DSoEmm3ntXNLhSXKkqU651Q",
  authDomain: "newt-lms.firebaseapp.com",
  databaseURL: "https://newt-lms.firebaseio.com",
  projectId: "newt-lms",
  storageBucket: "newt-lms.appspot.com",
  messagingSenderId: "205125363205"
}

firebase.initializeApp(config)


export default firebase
