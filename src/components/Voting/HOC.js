import React, { Component } from 'react'
import fire from '../../config/fire'

const HOC = WrappedComponent => {
  class Voting extends Component{
    state = {
      candidates: []
    }

    componentDidMount(){
      this.getCandidates()
    }

    getCandidates = () => {
      const db = fire.firestore()
      // db.collection('candidates').get()
      // .then(items => this.setState({ candidates: items.docs }))
      // .catch(err => this.setState({ err }))

      db.collection('candidates').onSnapshot(snapshot => {
        this.setState({ candidates: snapshot.docs })
        //console.log('snapshot', snapshot.docs)
        //this.setState({ candidates: snapshot.docChanges() })
      })
    }

    render(){
      return (
        <WrappedComponent
          {...this.props}
          candidates={this.state.candidates}
        />
      )
    }
  }
  return Voting
}

export default HOC
