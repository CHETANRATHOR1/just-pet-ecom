import React from 'react'
import {Button ,createTheme,ThemeProvider } from '@mui/material';
import './CommonButton.css' 

interface Props {
  title:string,
  click?:()=>void,
  type?:string,
  shouldDisable?:boolean
}

const  CommonButton =  (props:Props) => {

    const theme = createTheme({
        palette: {
          primary: {
            main: '#F84072', // set the primary color to #F84072
          },
        },
      });

  return (
    <div className=''>
      <ThemeProvider theme={theme}>
      <Button disabled={props.shouldDisable} className='button__style' type='submit' onClick={props.click} variant="contained" color="primary">
       {props.title}
      </Button>
    </ThemeProvider>
    </div>
  )
}

export default CommonButton
