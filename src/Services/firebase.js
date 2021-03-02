import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCNHgfr20kibv2bOuiY3BVVN8ZEmUekk6Q",
    authDomain: "innogoals-a72ce.firebaseapp.com",
    projectId: "innogoals-a72ce",
    storageBucket: "innogoals-a72ce.appspot.com",
    messagingSenderId: "107543084086",
    appId: "1:107543084086:web:5f147dc594ea0ccc23ec97",
    measurementId: "G-Z8LCPDJ60B"
  }
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)
  firebase.analytics()

  const auth = firebase.auth()
  const db = firebase.firestore()