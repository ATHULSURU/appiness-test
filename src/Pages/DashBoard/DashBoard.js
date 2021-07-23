import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core'

import userServices from '../../Services/userServices'
import './DashBoard.css'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
})

export default function BasicTable() {
  const classes = useStyles()

  const [data, setData] = useState(userServices)

  return (
    <TableContainer component={Paper} className='table-container'>
      <Table className={classes.table} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell align='right'>name</TableCell>
            <TableCell align='right'>age</TableCell>
            <TableCell align='right'>gender</TableCell>
            <TableCell align='right'>email</TableCell>
            <TableCell align='right'>phoneNo</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((data) => (
            <TableRow key={data.id}>
              <TableCell component='th' scope='row'>
                {data.id}
              </TableCell>
              <TableCell align='right'>{data.name}</TableCell>
              <TableCell align='right'>{data.age}</TableCell>
              <TableCell align='right'>{data.gender}</TableCell>
              <TableCell align='right'>{data.email}</TableCell>
              <TableCell align='right'>{data.phoneNo}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
