import React, { Component } from 'react'
import fire from '../../config/fire'

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
        u.user.sendEmailVerification()
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
