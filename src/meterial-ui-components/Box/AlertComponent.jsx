import React from 'react'
import Alert from '@mui/material/Alert'

export default function AlertComponent({text, ...rest}) {
  return (
    <Alert {...rest}> {text} /</Alert>
  )
}
