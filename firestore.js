// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '1',
  appId: '',
  measurementId: ''
}

const firestoreApp = initializeApp(firebaseConfig)

// const analytics = getAnalytics()
const auth = getAuth(firestoreApp)
const db = getFirestore(firestoreApp)
const database = getDatabase(firestoreApp)
export { firestoreApp, auth, db, database }
