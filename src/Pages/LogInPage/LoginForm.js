import React from 'react'
import { Button, TextField } from '@material-ui/core'

import makeStyles from '../../Common/Styles/Styles'
import './login.css'

const useStyles = makeStyles

function LoginForm(props) {
  const classes = useStyles()

  return (
    <form className={classes.form} noValidate>
      <TextField
        variant='outlined'
        margin='normal'
        className='default-font'
        required
        fullWidth
        id='email'
        label='Email Address'
        name='email'
        autoComplete='email'
        autoFocus
        value={props.userData.name}
        onChange={props.handleChange}
      />
      <p className='error-msg default-font'>{props.errors['email']}</p>
      <TextField
        variant='outlined'
        margin='normal'
        className='default-font'
        required
        fullWidth
        name='password'
        label='Password'
        type='password'
        id='password'
        value={props.userData.password}
        autoComplete='current-password'
        onChange={props.handleChange}
      />
      <p className='error-msg default-font'>{props.errors['password']}</p>
      <Button
        type='submit'
        fullWidth
        variant='contained'
        color='primary'
        className={classes.submit}
        onClick={props.logInSubmit}
      >
        Log In
      </Button>
    </form>
  )
}

export default LoginForm
