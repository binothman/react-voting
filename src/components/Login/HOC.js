import React, { Component } from 'react'
import fire from '../../config/fire'

const HOC = WrappedComponent => {
  class Login extends Component{
    state = {
      err: null,
    }
    handleOnSubmit = user => {
      fire.auth().signInWithEmailAndPassword(user.email, user.password)
      .catch(err => this.setState({ err }))
    }

    render(){
      return (
        <WrappedComponent
          {...this.props}
          onSubmit={this.handleOnSubmit}
          err={this.state.err}
        />
      )
    }
  }

  return Login
}

export default HOC
