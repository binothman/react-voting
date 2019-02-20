import React, { Component } from 'react'
import fire from '../../config/fire'

const HOC = WrappedComponent => {
  class Login extends Component{
    state = {
      error: null,
    }
    handleOnSubmit = user => {
      fire.auth().signInWithEmailAndPassword(user.email, user.password)
      .catch(error => {
        //console.log('error', error)
        this.setState({ error })
      })
    }

    render(){
      return (
        <WrappedComponent
          {...this.props}
          onSubmit={this.handleOnSubmit}
          error="ghsagd"
        />
      )
    }
  }

  return Login
}

export default HOC
