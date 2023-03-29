import React from 'react'
import TextField from '@mui/material/TextField';
import './InputField.css'


import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Box from '@mui/material/Box';

export interface InputChange {
  name:string,
  value:string
}

export interface fieldData {
  class?:string,
  id:string,
  label:string,
  type:string,
  name:string,
  placeholder:string,
  // onChangeFunction:(data:InputChange)=>{}

}

interface Props {
inputTextFieldData:fieldData,
handelChange:(e: any) => any
}

const InputField = ({inputTextFieldData,handelChange}:Props) => {
  const {id,label,name,placeholder,type} = inputTextFieldData

  let handelInputChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>{
    const {name,value} = e.target
    // onChangeFunction({name:name,value:value})
  }

  return (
    <div>
      <Box display='flex' flexDirection='column'>
      <label className='input__label' htmlFor="outlined-basic">{inputTextFieldData.label}</label>
      <TextField onChange={handelChange} type={type} name={name}      className={`input__text__field ${inputTextFieldData.class}`} id={id} label={label} variant="outlined" />
      </Box>
    </div>
  )
}

export default InputField
