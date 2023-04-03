import { Box, FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import { pink } from "@mui/material/colors";
import React from "react";
import CommonButton from "../../common/Button/CommonButton";
import InputField from "../../common/InputField/InputField";
import * as yup from "yup";
import { ErrorMessage, useFormik } from "formik";
import {fieldData} from '../../../interface/Noauth/InputFields-signup-signin'
import './Login.css'
const validadation = yup.object({
  email: yup.string().email().required("This field is required"),
  password: yup.string().min(8).required("This field is required"),
});

const SignUp: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      email:'',
      password:'',
    },
    validationSchema:validadation,
   
  
    onSubmit: (values) => {
     console.log(values);
     
    },
    
  });
  const inputFields:fieldData[] = [
    {
      id: "email",
      label: "Email",
      type: "email",
      name: "email",
      placeholder: "Email",
      onChange:formik.handleChange,
      value:formik.values.email,
      helperText:formik.errors.email,
      errors:Boolean(formik.errors.email),

    },
    {
      id: "password",
      label: "Password",
      type: "password",
      name: "password",
      placeholder: "Password",

      onChange:formik.handleChange,
      value:formik.values.password,
      helperText:formik.errors.password,
      errors:Boolean(formik.errors.password),


    },
  ];
 

  return (
    <div>
      <Box>
        <form onSubmit={(e)=>{e.preventDefault();console.log(formik.handleSubmit);}}>

          <Box sx={{ my: 2 }}>
            <span className="h6"> Sign in</span>
          </Box>
          {inputFields.map((item,i) => {
            return <>
           
            <InputField key={i} inputTextFieldData={item}></InputField>
           
            </>

          })}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      className="smaller"
                      defaultChecked
                      sx={{
                        color: pink[800],
                        "&.Mui-checked": {
                          color: pink[600],
                        },
                      }}
                    />
                  }
                  label="Remember Me"
                />
              </FormGroup>
            </Box>
            <Box sx={{ display: "flex" }}>
              <span className="smaller"> Forget Password</span>
            </Box>
          </Box>
          <Box>
            <CommonButton title="Sign In" type="submit" ></CommonButton>
            {/* <button type="submit">dfhgkj</button> */}
          </Box>
          <Box sx={{ m: 1 }}>
            <span className="medium">Dont'have an account</span>{" "}
            <span className="primary-color">Sign Up</span>
          </Box>
        </form>
      </Box>
    </div>
  );
};

export default SignUp;
