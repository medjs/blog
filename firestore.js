// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
  apiKey: 'AIzaSyAhoKnzzPYoqtDT4HPSJNBuGjHwtVGZ9Ow',
  authDomain: 'aircoolpalace-b4d06.firebaseapp.com',
  databaseURL: 'https://aircoolpalace-b4d06-default-rtdb.firebaseio.com',
  projectId: 'aircoolpalace-b4d06',
  storageBucket: 'aircoolpalace-b4d06.appspot.com',
  messagingSenderId: '101799803418',
  appId: '1:101799803418:web:354af3e1dd4dddc1e4efa3',
  measurementId: 'G-DW785WXD7T'
}

const firestoreApp = initializeApp(firebaseConfig)

// const analytics = getAnalytics()
const auth = getAuth(firestoreApp)
const db = getFirestore(firestoreApp)
const database = getDatabase(firestoreApp)
export { firestoreApp, auth, db, database }
