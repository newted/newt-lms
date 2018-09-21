import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// School config
let schoolConfig = {
  apiKey: "AIzaSyBUKcW_W14-DSoEmm3ntXNLhSXKkqU651Q",
  authDomain: "newt-lms.firebaseapp.com",
  databaseURL: "https://newt-lms.firebaseio.com",
  projectId: "newt-lms",
  storageBucket: "newt-lms.appspot.com",
  messagingSenderId: "205125363205"
}

let schoolInstance = firebase.initializeApp(schoolConfig, "schoolConfig")

export default schoolInstance
