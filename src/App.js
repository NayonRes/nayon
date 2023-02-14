import logo from "./logo.svg";
import Home from "./pages/Home";

// import './App.css';
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#5f9ea0",
      contrastText: "#fff",
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      // light: will be calculated from palette.primary.main,
      main: "#061A38",
      contrastText: "#fff",
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
  },
});

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </div>
  );
}

export default App;
