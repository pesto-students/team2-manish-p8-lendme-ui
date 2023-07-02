import React from 'react'
import { LinearProgress } from '@mui/material'

export default function ProgressComponent({variant, ...rest}) {
  return (
    <LinearProgress variant={variant} {...rest}/>
  )
}
