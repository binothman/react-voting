import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom'
import RootRouter from './routers/RootRouter'

// CSS
import './app.css'
import 'semantic-ui-css/semantic.min.css'

class App extends Component {
  render() {
    return (
      <HashRouter>
        <RootRouter />
      </HashRouter>
    )
  }
}

export default App;
