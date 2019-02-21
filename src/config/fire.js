import React from 'react'
import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyA4qbtqWUgUtuFb46IWW1KPwVEvJkqiMKE",
  authDomain: "voting-91980.firebaseapp.com",
  databaseURL: "https://voting-91980.firebaseio.com",
  projectId: "voting-91980",
  storageBucket: "voting-91980.appspot.com",
  messagingSenderId: "723295294868"
}

const fire = firebase.initializeApp(config)
export const UserContext = React.createContext({
  user: fire.auth().currentUser,
})

export default fire
