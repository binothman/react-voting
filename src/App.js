import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom'
import RootRouter from './routers/RootRouter'
import fire from './config/fire'

// CSS
import './app.css'
import 'semantic-ui-css/semantic.min.css'

export const UserContext = React.createContext({
  user: {},
})
class App extends Component {
  state = {
    user: null,
  }

  componentDidMount(){
    this.authListener()
  }

  authListener = () => {
    fire.auth().onAuthStateChanged(user => {
      this.setState({ user })
    })
  }

  render() {
    return (
      <HashRouter>
        <RootRouter user={this.state.user} />
      </HashRouter>
    )
  }
}

export default App;
