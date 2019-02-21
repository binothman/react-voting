import React, { Component } from 'react'
import fire from '../../config/fire'
const db = fire.firestore()

const HOC = WrappedComponent => {
  class Verification extends Component{
    state = { err: null, user: {} }

    handleOnSubmit = values => {
      const uid = fire.auth().currentUser.uid
      db.collection('users').doc(uid).onSnapshot(doc => {
        if (parseInt(doc.data().code) === parseInt(values.code)){
          db.collection('users').doc(uid).update({
            verified: true
          })
        }else{
          this.setState({ err: 'Wrong Code!' })
        }
      })
    }

    componentDidMount(){
      this.setState({
        user: fire.auth().currentUser
      })
    }

    render(){
      return (
        <WrappedComponent
          {...this.props}
          handleOnSubmit={this.handleOnSubmit}
          err={this.state.err}
          user={this.state.user}
        />
      )
    }
  }
  return Verification
}

export default HOC
