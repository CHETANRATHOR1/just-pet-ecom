import { Button } from '@mui/material'
import CommonModal from '../../components/common/Modal/Modal'
import React from 'react'
import CommonButton from '../../components/common/Button/CommonButton'
import InputFiels, { fieldData } from '../../components/common/InputField/InputField'
import SignUp from '../../components/NoAuth/SignUp/SignUp'
import ForgetPassword from '../../components/NoAuth/ForgetPassword/ForgetPassword'
const Login = () => {
  // const fieldData :fieldData = {
  //   id:'email',
  //   label:'Email',
  //   name:'email',
  //   placeholder:'Enter email id',
  //   type:'text'
  // }
  let handelClick = ()=>{
    console.log("Button Click");
  }

  let handeFormSubmit = () =>{
    console.log("submit")
  }
  

  return (
    <div>
    

    {/* {/* <div style={{width:'300px',margin:'100px'}} className="container"> */}
    <CommonModal >
      {/* <SignUp/> */}
      <ForgetPassword></ForgetPassword>
    </CommonModal>
    
   {/* <CommonButton shouldDisable={false} title='Sign Up' click={handelClick}></CommonButton> */}
   {/* <InputFiels inputTextFieldData={fieldData}></InputFiels> */}
    {/* </div> */}

<form onSubmit={(e)=>{e.preventDefault(); handeFormSubmit()}}>

  {/* <InputFiels  inputTextFieldData={}></InputFiels> */}
  <input type="text" />
  <CommonButton type='submit' title='Submit'></CommonButton>
</form>


    </div>
  )
}

export default Login
