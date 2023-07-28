import { Link } from "react-router-dom";
import { Container, Grid, List, Paper } from "@material-ui/core";
import { ListItem, ListItemButton } from "@mui/material";

const Home = () => {
  return (
    <Container maxWidth="lg">
      <Grid
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
        container
      >
        <Paper className="App">
          <Grid item xs={12}>
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to="/autocomplete"
                  >
                    Autocomplete
                  </Link>
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton>
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to="/brokenimages"
                  >
                    Broken Images{" "}
                  </Link>
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton>
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to="checkboxes"
                  >
                    Checkboxes{" "}
                  </Link>
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton>
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to="/dropdown"
                  >
                    Dropdown{" "}
                  </Link>
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton>
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to="/datetime"
                  >
                    Date Time{" "}
                  </Link>
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton>
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to="/sliders"
                  >
                    Sliders
                  </Link>
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton>
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to="/switches"
                  >
                    Switches{" "}
                  </Link>
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton>
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to="/Table"
                  >
                    Table
                  </Link>
                </ListItemButton>
              </ListItem>
            </List>
          </Grid>
        </Paper>
      </Grid>
    </Container>
  );
};

export default Home;
