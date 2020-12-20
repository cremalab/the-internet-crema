import { Link } from "react-router-dom"
import logo from "../../assets/logo.svg"
import React from 'react';
import { Box, Button, Container, Menu, MenuItem, Paper, Typography } from "@material-ui/core";
// import useState from 'react';



const Home = () => {

  // const [inputState, setInputState] = useState("")
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Container maxWidth="md">
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Open Menu
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <Link to="/checkboxes"> Checkboxes </Link></MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/brokenimages"> Broken Images </Link></MenuItem>
        <MenuItem onClick={handleClose}>  <Link to="/dropdown"> Dropdown </Link></MenuItem>
      </Menu>
      <Paper className="App">
        <Box className="App-header">
          <Typography variant="h2">The Internet by Crema</Typography>
          <img src={logo} className="App-logo" alt="logo" />
        </Box>
      </Paper>
    </Container>
  )
}

export default Home
