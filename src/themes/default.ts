import { ThemeOptions } from "@material-ui/core";

export const theme: ThemeOptions = {
  typography: {
    caption: {
      fontSize: 10,
    },
  },
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#98bdc4",
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      // light: '#0066ff',
      main: "#e74208",
      // dark: will be calculated from palette.secondary.main,
      // contrastText: '#ffcc00',
    },
    success: {
      main: "#115293",
    },
    error: {
      main: "#d32f2f",
    },
  },
};
