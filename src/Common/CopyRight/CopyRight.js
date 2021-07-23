import React from 'react'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'

function CopyRight(props) {
  return (
    <Typography
      variant='body2'
      color='textSecondary'
      align='center'
      className='default-font'
    >
      Copyright ©
      <Link
        className='default-font'
        color='inherit'
        href='https://www.appinessworld.com/'
      >
        appiness interactive pvt. ltd.
      </Link>
      {new Date().getFullYear()}.
    </Typography>
  )
}

export default CopyRight
