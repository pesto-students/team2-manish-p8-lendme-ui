import { TextField } from '@mui/material'
import React from 'react'

//variant = standard/ filled/ outlined
export default function TextFieldComponent(props) {
    return (
        <TextField id="standard-basic" label="Standard" variant= {props.variant} /> 
    )
}
