import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { Box, Container, List, Paper, Typography } from "@material-ui/core";
import { ListItem, ListItemButton } from "@mui/material";

const Home = () => {
  return (
    <Container maxWidth="md">
      <Paper className="App">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <Link to="/checkboxes">Checkboxes </Link>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <Link to="/brokenimages">Broken Images </Link>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <Link to="/dropdown">Dropdown </Link>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <Link to="/datetime">Date Time </Link>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <Link to="/sliders">Sliders</Link>
            </ListItemButton>
          </ListItem>

          <Box className="App-header">
            <Typography variant="h2">The Internet by Crema</Typography>
            <img src={logo} className="App-logo" alt="logo" />
          </Box>
        </List>
      </Paper>
    </Container>
  );
};

export default Home;
