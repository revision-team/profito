import { makeStyles } from "@material-ui/core";

export const loginStyles = makeStyles((theme: any) => ({
  palette:  { 
    type: "dark",
    primary :{
      main: "#3f51b5",dark: "#303f9f",contrastText: "#fff"
    },
    text: {
        primary: "#ffffff",
        secondary: "#00000"
  }
 } , 
  root: {
    justifyContent: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  formtitle: {
    fontSize: 40,
    fontWeight: 'bold',
    margin: '0px 0px 0px 0px',
  },

  formcontrol: {
    margin: theme.spacing(1),
    width: '100%',
  },

  inputlabel: {
    fontWeight: 'bold',
    color: 'white',
    mixBlendMode: 'difference',
  },
  textField: {
    width: '100%',
  },
  input: {
    color: 'white'
  },
  loginButton: {
    width: '100%',
    margin: theme.spacing(1),
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    fontWeight: 'bold',
    minHeight: 60,
  },
  socialicon: {
    mixBlendMode: 'difference',
  },
  floatRight: {
    float: 'right',
  },
  linkNoUnderLine: {
    color: 'white',
    textDecoration: 'none',
    mixBlendMode: 'difference',
  },

}));

