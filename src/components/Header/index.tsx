import { Box, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

function Header() {
  return (
    <Box paddingTop={10} className="App-header">
      <Link to="/" style={{ textDecoration: "none", color: "black" }}>
        <Typography variant="h2">
          The Internet by Crema{" "}
          <img src={logo} className="App-logo" alt="logo" />
        </Typography>
      </Link>
    </Box>
  );
}

export default Header;
