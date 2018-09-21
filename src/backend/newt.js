import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Newt config
let newtConfig = {
  apiKey: "AIzaSyDOru0UYqrNB48qMY8DaPyTTykbNpS7KFE",
  authDomain: "newt-ed.firebaseapp.com",
  databaseURL: "https://newt-ed.firebaseio.com",
  projectId: "newt-ed",
  storageBucket: "newt-ed.appspot.com",
  messagingSenderId: "52783138013"
}

let newt = firebase.initializeApp(newtConfig)

export default newt
