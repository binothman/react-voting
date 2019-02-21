import React, { Component } from 'react'
import fire from '../../config/fire'

const db = fire.firestore()
const HOC = WrappedComponent => {
  class Signup extends Component{
    state = {
      err: null,
      loading: false,
    }

    handleOnSubmit = user => {
      this.setState({ loading: true })
      fire.auth().createUserWithEmailAndPassword(user.email, user.password)
      .then(u => {
        u.user.updateProfile({
          displayName: user.fullname,
        })
        const code = parseInt(Math.random() * (1000000 - 100000) + 100000)
        db.collection('users').doc(u.user.uid).set({
          code,
          verified: false
        })
        window.emailjs.send(
          'gmail',
          'template_lGBiT47U',
          {
            to_name: user.fullname,
            receiverEmail: user.email,
            message_html: code,
          }
        )
        .catch(err => console.log('err', err))
        //u.user.sendEmailVerification()
      })
      .catch(err => this.setState({ err, loading: false }))
    }
    render(){
      return (
        <WrappedComponent
          {...this.props}
          onSubmit={this.handleOnSubmit}
          loading={this.state.loading}
          err={this.state.err}
        />
      )
    }
  }

  return Signup
}

export default HOC
