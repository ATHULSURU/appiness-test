import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router'

import Login from '../../Pages/LogInPage/Login'

const Auth = (props) => {
  const { isAuthUser } = props

  if (!isAuthUser) return <Login />
  return <Route {...props} />
}

const mapStateToProps = (state) => {
  return {
    isAuthUser: state.logInData.isAuthUser,
  }
}

export default connect(mapStateToProps)(Auth)
