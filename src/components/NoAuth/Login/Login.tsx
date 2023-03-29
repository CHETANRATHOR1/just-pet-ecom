import { Button } from "@mui/material";
import { Form, Formik, useFormik } from "formik";
import React from "react";
import CommonButton from "../../common/Button/CommonButton";
import InputFiels, {
  fieldData,
  InputChange,
} from "../../common/InputField/InputField";
import "./Login.css";

interface FormValues {
  email: string;
  password: string;
}
const Login = () => {

  const formik = useFormik({
    initialValues: {
      email: 'foobar@example.com',
      password: 'foobar',
      phone: 1212,
    },
    // validationSchema: validationSchema,
    onSubmit: (values,e) => {
     
      alert(JSON.stringify(values, null, 2));
    },
  });


  let handelOnChange = (data: InputChange) => {
    console.log(data);
    return data;
  };

  const fieldData: fieldData = {
    id: "email",
    label: "Email",
    name: "email",
    placeholder: "Enter email id",
    type: "text",
    // onChangeFunction: handelOnChange,
  };

  const fieldData2: fieldData = {
    id: "password",
    label: "Password",
    name: "password",
    placeholder: "Enter password",
    type: "password",
    // onChangeFunction: handelOnChange,
    class: "click",
  };
  const fieldData3: fieldData = {
    id: "phone",
    label: "phone",
    name: "phone",
    placeholder: "Enter password",
    type: "number",
    // onChangeFunction: handelOnChange,
    class: "click",
  };

  // let handelClick = () => {
  //   console.log("Button Click");
  // };

  // let handeFormSubmit = (values: FormValues) => {
  //   console.log("submit", values);
  // };

  // const initialValues: FormValues = {
  //   email: "",
  //   password: "",
  // };

  return (
    <div>
      <div style={{ width: "300px", margin: "100px" }} className="container">
        {/* <CommonButton shouldDisable={false} title='Sign Up' click={handelClick}></CommonButton> */}
       
          
            <form onSubmit={formik.handleSubmit}>
              <InputFiels handelChange={(e: any)=>{formik.handleChange(e)}}  inputTextFieldData={fieldData}></InputFiels>
              <InputFiels handelChange={(e: any)=>{formik.handleChange(e)}}  inputTextFieldData={fieldData2}></InputFiels>
              <InputFiels handelChange={(e: any)=>{formik.handleChange(e)}}  inputTextFieldData={fieldData3}></InputFiels>
              {/* <InputFiels handelChange={formik.handleChange} inputTextFieldData={fieldData2}></InputFiels> */}
              <CommonButton title="submit" type="submit"></CommonButton>
            </form>
                                                   
      </div>
    </div>
  );
};

export default Login;
