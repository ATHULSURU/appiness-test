import React, { useState, useEffect } from 'react'
import {
  Avatar,
  CssBaseline,
  Box,
  Typography,
  Container,
} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'

import CopyRight from '../../Common/CopyRight/CopyRight'
import makeStyles from '../../Common/Styles/Styles'
import LoginForm from './LoginForm'
import './login.css'

const useStyles = makeStyles

const Login = (props) => {
  const { isAuthUser, login } = props
  const classes = useStyles()
  let history = useHistory()

  const [userData, setUserData] = useState({
    email: '',
    password: '',
  })
  const [errors, setErrors] = useState({})

  useEffect(() => {
    if (!isAuthUser) {
      history.push('/')
    }
  })

  const handleChange = (e) => {
    let value = e.target.value
    let name = e.target.name
    setUserData({
      ...userData,
      [name]: value,
    })
  }
  const handleValidation = () => {
    let fields = userData
    let errors = {}
    let formIsValid = true

    //User Name Validation
    if (fields['email'] === '') {
      formIsValid = false
      errors['email'] = '* Cannot be empty'
    } else {
      if (!fields['email'].match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g)) {
        formIsValid = false
        errors['email'] = '*invalid email id'
      }
    }

    //Password Validation
    if (fields['password'] === '') {
      formIsValid = false
      errors['password'] = '* Cannot be empty'
    } else {
      if (fields['password'].length < 8) {
        errors['password'] = '* invalid password'
      }
    }

    //authorization
    if (
      formIsValid &&
      (login.username !== userData.email ||
        login.password !== userData.password)
    ) {
      formIsValid = false
      errors['auth'] = 'Your email id is not authorized to perform this task'
    }

    setErrors(errors)
    return formIsValid
  }

  const logInSubmit = (e) => {
    e.preventDefault()
    if (handleValidation()) {
      history.push('/dashboard')
      props.responseData('SUCCESS')
    } else {
      props.responseData('FAILED')
    }
  }

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5' className='default-font'>
          Log in
        </Typography>
        <LoginForm
          userData={userData}
          errors={errors}
          logInSubmit={logInSubmit}
          handleChange={handleChange}
        />
        <p className='error-msg default-font'>{errors['auth']}</p>
      </div>
      <Box mt={3}>
        <CopyRight />
      </Box>
    </Container>
  )
}
const mapStateToProps = (state) => {
  return {
    isAuthUser: state.logInData.isAuthUser,
    login: state.logInData.login,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    responseData: (e, data) => dispatch({ type: e, value: data }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
