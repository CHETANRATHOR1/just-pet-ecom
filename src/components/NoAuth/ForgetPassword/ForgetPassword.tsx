import { Box, FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import { pink } from "@mui/material/colors";
import React, { useState } from "react";
import CommonButton from "../../common/Button/CommonButton";
import InputField from "../../common/InputField/InputField";
import * as yup from "yup";
import { ErrorMessage, useFormik } from "formik";
import { fieldData } from "../../../interface/Noauth/InputFields-signup-signin";
import "./ForgetPassword.css";
const validadation = yup.object({
  email: yup.string().email().required("This field is required"),
  password: yup.string().min(8),
});

const ForgetPassword: React.FC = () => {
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validadation,

    onSubmit: (values) => {
        setIsEmailVerified(true)
        console.log(values);
    
    },
  });
  const inputFields: fieldData[] = [
    {
      id: "email",
      label: "Email",
      type: "email",
      name: "email",
      placeholder: "Email",
      onChange: formik.handleChange,
      value: formik.values.email,
      helperText: formik.errors.email,
      errors: Boolean(formik.errors.email),
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
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log(formik.handleSubmit);
          }}
        >
          <Box sx={{ my: 2 }}>
            <span className="h6"> Forget Password</span>
          </Box>
          {inputFields.map((item,index) => {
            return (
              <>
                {(item.type=='email'? <InputField inputTextFieldData={item}></InputField>:null)}
                {
                (item.type=='password'&&isEmailVerified? <InputField inputTextFieldData={item}></InputField>:null)
                
                }
               
              </>
            );
          })}

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            {/* <Box sx={{ display: "flex" }}>
              <span className="smaller"> Forget Password</span>
            </Box> */}
          </Box>
          <Box>
            <CommonButton title="Submit" type="submit"></CommonButton>
            {/* <button type="submit">dfhgkj</button> */}
          </Box>
          <Box sx={{ m: 1 }}>
            <span className="medium">Back to</span>{" "}
            <span className="primary-color">Sign In</span>
          </Box>
        </form>
      </Box>
    </div>
  );
};

export default ForgetPassword;
