import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#64b5f6",
    },
    secondary: {
      main: "#f48fb1",
    },
  },
  typography: {
    fontFamily: `'Poppins', sans-serif`,
  },
});

export default theme;
