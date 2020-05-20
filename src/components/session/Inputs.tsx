import React, { FunctionComponent } from "react";
import {
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  input: {
    minWidth: theme.spacing(40),
    marginTop: theme.spacing(1.7),
    marginBottom: theme.spacing(1),
  },
}));

interface IconInputProps {
  label?: string;
  id: string;
  placeholder: string;
  type?: string;
  value: string;
  onChange: (s: string) => void;
}

export const IconInput: FunctionComponent<IconInputProps> = (props) => {
  const classes = useStyles();
  return (
    <FormControl className={classes.input}>
      {props.label && <InputLabel htmlFor={props.id}>{props.label}</InputLabel>}
      <Input
        fullWidth
        id={props.id}
        placeholder={props.placeholder}
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
        type={props.type}
        startAdornment={
          <InputAdornment position='start'>{props.children}</InputAdornment>
        }
      />
    </FormControl>
  );
};
