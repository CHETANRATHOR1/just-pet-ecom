import { Button } from '@mui/material'
import React from 'react'
import CommonButton from '../../common/Button/CommonButton'
import InputFiels, { fieldData } from '../../common/InputField/InputField'
const Login = () => {
  const fieldData :fieldData = {
    id:'email',
    label:'Email',
    name:'email',
    placeholder:'Enter email id',
    type:'text'
  }
  let handelClick = ()=>{
    console.log("Button Click");
  }

  let handeFormSubmit = () =>{
    console.log("submit")
  }
  

  return (
    <div>
    

    <div style={{width:'300px',margin:'100px'}} className="container">

   {/* <CommonButton shouldDisable={false} title='Sign Up' click={handelClick}></CommonButton> */}
   <InputFiels inputTextFieldData={fieldData}></InputFiels>
    </div>


    </div>
  )
}

export default Login
