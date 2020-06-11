import React, { useState } from "react";

import { makeStyles, Theme, fade } from "@material-ui/core/styles";
import { InputBase } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { stringify } from "querystring";
import { __InputValue } from "graphql";

const useStyles = makeStyles((theme: Theme) => ({
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.1),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.15),
    },
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2),
    height: 46,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(2),
      width: "auto",
    },
    boxShadow: "1px 2px 3px #343434",
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    height: "inherit",
    color: "inherit",
  },
  input: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "100%",
    },
  },
}));

interface SearchProps {
  names: string[];
}

export default function SearchBar(props: SearchProps) {
  const classes = useStyles();

  const SearchBarHandleChange = () => {};

  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder="Search…"
        aria-label="search"
        autoFocus
        classes={{
          root: classes.inputRoot,
          input: classes.input,
        }}
        onChange={SearchBarHandleChange}
      />
    </div>
  );
}
