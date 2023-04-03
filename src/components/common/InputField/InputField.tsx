import React, { ChangeEvent } from "react";
import TextField from "@mui/material/TextField";
import "./InputField.css";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Box from "@mui/material/Box";
import { FormHelperText } from "@mui/material";
import { fieldData } from "../../../interface/Noauth/InputFields-signup-signin";


interface Props {
  inputTextFieldData: fieldData;
}


const InputField = ({inputTextFieldData}:Props) => {

  return (
    <div>
      <Box display="flex" flexDirection="column">
        <label className="input__label" htmlFor="outlined-basic">
          {inputTextFieldData.label}
        </label>
        <TextField
          type={inputTextFieldData.type}
          value={inputTextFieldData.value}
          onChange={inputTextFieldData.onChange}
          name={inputTextFieldData.name}
          className="input__text__field"
          id={inputTextFieldData.id}
          label={inputTextFieldData.label}
          variant="outlined"
          error={inputTextFieldData.errors}
        />
        <FormHelperText sx={{color:'red'}}> {inputTextFieldData.helperText}</FormHelperText>
      </Box>
    </div>
  );
};

export default InputField;
