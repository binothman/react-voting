import React, { Component } from 'react'
import fire from '../../config/fire'

const db = fire.firestore()

const HOC = WrappedComponent => {
  class Voting extends Component{
    state = {
      candidates: [],
      isVoted: false,
      candiate: {},
      verified: null,
    }

    componentDidMount(){
      this.isVerified()
    }

    getCandidates = () => {
      db.collection('candidates').onSnapshot(snapshot => {
        this.setState({ candidates: snapshot.docs })
      })
    }

    handleVote = (candiate) => {
      const uid = fire.auth().currentUser.uid
      db.collection('voting').doc(uid).set({
        candiate
      })
      .then(() => {
        this.getCandiate(candiate)
      })
    }

    getCandiate = candiate_id => {
      db.collection('candidates').doc(candiate_id).get()
      .then(candiate => {
        this.setState({ candiate: candiate.data() })
      })
    }

    isVerified = () => {
      const uid = fire.auth().currentUser.uid
      db.collection('users').doc(uid).onSnapshot(doc => {
        const data = doc.data() || {}
        if (data.verified){
          this.isVoted()
        }else{
          this.setState({ candidates: [], isVoted: false })
        }
        this.setState({verified: data.verified})
      })
    }

    isVoted = () => {
      const uid = fire.auth().currentUser.uid
      db.collection('voting').doc(uid).onSnapshot(doc => {
        if (doc.data()) {
          this.setState({ candidates: [], isVoted: true })
          this.getCandiate(doc.data().candiate)
        }else {
          this.getCandidates()
          this.setState({ isVoted: false })
        }
      })
    }

    render(){
      return (
        <WrappedComponent
          {...this.props}
          candidates={this.state.candidates}
          handleVote={this.handleVote}
          isVoted={this.state.isVoted}
          candiate={this.state.candiate}
          verified={this.state.verified}
        />
      )
    }
  }
  return Voting
}

export default HOC
