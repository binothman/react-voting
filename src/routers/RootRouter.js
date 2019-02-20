import React from 'react'
import { Switch } from 'react-router-dom'


import RedirectRoute from './RedirectRoute'

// Pages Components
import Login from '../components/Login'
import Voting from '../components/Voting'
import Signup from '../components/Signup'


const RootRouter = ({ user }) => (
  <Switch>
    <RedirectRoute
      path="/login"
      component={Login}
      condition={!user}
      redirect="/"
    />
    <RedirectRoute
      path="/signup"
      component={Signup}
      condition={!user}
      redirect="/"
    />
    <RedirectRoute
      path="/"
      component={Voting}
      condition={user}
      redirect="/login"
    />
  </Switch>
)

export default RootRouter
