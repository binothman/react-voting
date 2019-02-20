import React from 'react'
import { Route, Switch } from 'react-router-dom'

//import RedirectRoute from './RedirectRoute'

// Pages Components
import Login from '../components/Login'
import Voting from '../components/Voting'
import Signup from '../components/Signup'


const RootRouter = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <Route exact path="/signup" component={Signup} />
    <Route exact path="/" component={Voting} />
  </Switch>
)

export default RootRouter
