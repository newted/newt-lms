import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import firebaseConfig from '../firebase-config.json'

// School config
let schoolConfig = firebaseConfig['schoolConfigs']['myConfig']

let schoolInstance = firebase.initializeApp(schoolConfig, "schoolConfig")

export default schoolInstance
