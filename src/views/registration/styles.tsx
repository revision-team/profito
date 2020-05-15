import { makeStyles } from "@material-ui/core";

export const loginStyles = makeStyles((theme: any) => ({
    root: {
      justifyContent: 'center',
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    center: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    card: {
      borderStyle: 'solid', borderWidth: '0px',
      margin: theme.spacing(0),
      boxShadow: '0 0 0 0',
      width: '100%',
      overflowY: "auto",
    },
    cardHeader: {
      fontSize1: theme.medium,
    },
    cardContent: {
      borderStyle: 'solid', borderWidth: '0px',
    },
  
    cardTitle: {
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
    },
    textField: {
      width: '100%',
      marginBottom: theme.spacing(2),
    },
    input: {
      color: 'white'
    },
    loginButton: {
      width: '100%',
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
      //background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      background: 'linear-gradient(45deg, #00dbde 30%, #fc00ff 90%)',
      "-webkit-transition": 'all 0.4s',
      "-o-transition": 'all 0.4s',
      "-moz-transition": 'all 0.4s',
      "transition": 'all 0.4s',
      border: 0,
      borderRadius: 25,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
      fontWeight: 'bold',
    },
  
  
  }));

