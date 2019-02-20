/*
 RedirectRoute: Statless Componet
 to render component by condition
 else redirect to another URL

 - use this component under react-router-dom V4
*/

import React from 'react'
import PropTypes from 'prop-types'
import { Redirect, Route } from 'react-router-dom'

const RedirectRoute = ({ component, redirect, path, condition }) => {
  const Component = component

  return condition ? (
    <Route path={path} component={Component} />
  ) : (
    <Redirect to={redirect} />
  )
}

RedirectRoute.propTypes = {
  component: PropTypes.any.isRequired,
  redirect: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  condition: PropTypes.bool.isRequired,
}
export default RedirectRoute
