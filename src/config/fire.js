import React from 'react'
import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyCBm_nzm142RxzrCjSHeNpvAufjOHO2Cpc",
  authDomain: "voting-cce17.firebaseapp.com",
  databaseURL: "https://voting-cce17.firebaseio.com",
  projectId: "voting-cce17",
  storageBucket: "voting-cce17.appspot.com",
  messagingSenderId: "15394643496"
}

const fire = firebase.initializeApp(config)
export const UserContext = React.createContext({
  user: fire.auth().currentUser,
})

export default fire
