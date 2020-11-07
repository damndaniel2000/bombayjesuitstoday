import { createMuiTheme } from "@material-ui/core";

const blue1 = "#003a8c";
const blue2 = "#061178";

export default createMuiTheme({
  palette: {
    common: {
      blue1: blue1,
      blue2: blue2,
    },
    primary: {
      main: blue2,
      contrastText: "#fff",
    },
    secondary: {
      main: blue1,
      contrastText: "#fff",
    },
  },
  typography: {
    fontFamily: [
      "Raleway",
      "Zilla Slab",
      "Roboto",
      '"Helvetica"',
      "Arial",
      "sans-serif",
    ].join(","),
    h3: {
      fontWeight: 700,
    },
    button: {
      fontFamily: "Raleway",
      fontWeight: 700,
      textTransform: "sentence",
    },
  },
});
