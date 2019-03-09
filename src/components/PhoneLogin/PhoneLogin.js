import React, { Component } from 'react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from '../../config/fire';



class PhoneLogin extends Component{
  componentDidMount(){
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {})
    // window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
    //   size: 'invisible',
    //   callback: response => {
    //     console.log('response')
    //   }
    // })

  }

  render(){
    return (
      <div>
        <div ref={(ref)=>this.recaptcha=ref}></div>
      </div>
    )
  }
}

export default PhoneLogin
