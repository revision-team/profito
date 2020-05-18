import React, { useState } from "react";
import clsx from 'clsx';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import { Input } from "@material-ui/core";
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';

import InputLabel from '@material-ui/core/InputLabel';
import { GoogleIcon, FacebookIcon, TwitterIcon } from "components/icons";
import { Link } from "react-router-dom";
import { loginStyles } from './styles';

export const useStateCallbackWrapper = (initilValue: any, callBack: any) => {
  const [state, setState] = useState(initilValue);
  return [state, setState];
};

export const ForgotPassword = () => {
  const classes = loginStyles();

  return (
    <Link
      to="#"
      className={clsx(classes.floatRight, classes.linkNoUnderLine)}
    >
      Forgot password?
    </Link>
  )
}

export const FormTitle = (props: any) => (
  <Typography gutterBottom variant="h1" component="h1" align="center" >
    {props.title}
  </Typography>

);

export const Register = () => {
  const classes = loginStyles();

  return (
    <Typography variant="caption">Or Sign Up Using&nbsp;
      <Link to="/auth/register"
        className={clsx(classes.floatRight, classes.linkNoUnderLine)}
      >
        Register
       </Link>
    </Typography>
  )
}

export const Registrations = () => {
  const classes = loginStyles();
  return (

    <Grid container spacing={0} className={classes.center}
      direction="column" >
      <Grid item xs={12} >
        <Typography >Or Sign Up Using</Typography>
        <IconButton>
          <FacebookIcon className={classes.socialicon} />
        </IconButton>

        <IconButton>
          <TwitterIcon className={classes.socialicon} />
        </IconButton>

        <IconButton>
          <GoogleIcon />
        </IconButton>
      </Grid>

      <Grid item xs={6}  >
        <Register />
      </Grid>

    </Grid>
  )
};

export const LoginLink = () => {
  const classes = loginStyles();
  return (
    <Link to="/auth/login"
      className={clsx(classes.floatRight, classes.linkNoUnderLine)}
    >Already have an account? Login </Link>
  )
}

export const FormControlwithInput = (props: any) => {
  const allProps = { ...props };
  const { fieldAttributes, data, getChildChange } = allProps;
  const { label, fieldName, fieldType, required, errorFlag } = fieldAttributes;
  const classes = loginStyles();
  const [fieldValue, setFieldValue] = useState("");

  //console.log("FormControlwithInput::label= ",     label,",data=", data, ", fieldName=", fieldName, ",fieldType=", fieldType);

  function handleChange(event: any) {
    setFieldValue(event.target.value);
    let newData = { ...data };
    newData[fieldName] = fieldValue;
    props.getChildChange(newData);
  }

  return (
    <FormControl className={classes.formcontrol}>
      <InputLabel className={classes.inputlabel} color="primary"
        htmlFor="input-with-icon-adornment">{label}:</InputLabel>
      <Input
        className={classes.textField}
        fullWidth={true}
        required={required}
        id={label}
        error={required && !fieldValue ? true : false}
        type={fieldType ? fieldType : ""}
        placeholder={required && !fieldValue ? "Please enter a valid " + label : ""}
        value={fieldValue}
        onChange={handleChange}
      />
      <FormHelperText id={label} error={errorFlag} >
        {errorFlag ? "Error" : ""}
      </FormHelperText>
    </FormControl>

  )

};