import React, { Component } from 'react'
import fire from '../../config/fire'

const HOC = WrappedComponent => {
  class Login extends Component{
    state = {
      err: null,
      loading: false,
    }
    
    handleOnSubmit = user => {
      this.setState({ loading: true })
      fire.auth().signInWithEmailAndPassword(user.email, user.password)
      .catch(err => this.setState({ err, loading: false }))
    }

    render(){
      return (
        <WrappedComponent
          {...this.props}
          onSubmit={this.handleOnSubmit}
          err={this.state.err}
          loading={this.state.loading}
        />
      )
    }
  }

  return Login
}

export default HOC
