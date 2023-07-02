import React from 'react'
import { CircularProgress } from '@mui/material'

export default function SpinnerComponent(props) {
  return (
    <CircularProgress color={props.color}/>
  )
}
