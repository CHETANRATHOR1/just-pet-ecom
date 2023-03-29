import React from 'react'
import TextField from '@mui/material/TextField';
import './InputField.css'


import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Box from '@mui/material/Box';


export interface fieldData {
  id:string,
  label:string,
  type:string,
  name:string,
  placeholder:string,

}

interface Props {
inputTextFieldData:fieldData
}


const InputField = (props:Props) => {
  return (
    <div>
     
      <Box display='flex' flexDirection='column'>
      <label className='input__label' htmlFor="outlined-basic">{props.inputTextFieldData.label}</label>
      <TextField    className='input__text__field' id={props.inputTextFieldData.id} label={props.inputTextFieldData.label} variant="outlined" />
      </Box>
    </div>
  )
}

export default InputField
