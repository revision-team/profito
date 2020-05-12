import React, { useContext } from "react";
import { CssBaseline, ThemeProvider, createMuiTheme } from "@material-ui/core";
import Routes from "router";
import { Store } from "store";
import { theme } from "themes/default";

export default function App() {
  const { state } = useContext(Store);

  const muiTheme = createMuiTheme({
    ...theme,
    palette: { type: state.theme },
  });

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <Routes />
    </ThemeProvider>
  );
}
