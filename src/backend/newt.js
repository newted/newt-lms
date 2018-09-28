import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import firebaseConfig from '../firebase-config.json'

// Newt config
let newtConfig = firebaseConfig['baseConfigs']['newtConfig']

let newt = firebase.initializeApp(newtConfig)

export default newt
