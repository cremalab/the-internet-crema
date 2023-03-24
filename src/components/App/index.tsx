import "./styles.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "../Routes";
import { Link } from "react-router-dom";
import { Box, Typography } from "@material-ui/core";
import logo from "../../assets/logo.svg";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Router>
        <Box paddingTop={10} className="App-header">
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <Typography variant="h2">
              The Internet by Crema{" "}
              <img src={logo} className="App-logo" alt="logo" />
            </Typography>
          </Link>
        </Box>

        <Routes />
      </Router>
    </ThemeProvider>
  );
}
