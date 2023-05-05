import "./styles.css";
import { Route, Switch } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Home from "../Home";
import Header from "../Header";
import Autocomplete from "../Autocomplete";
import BrokenImages from "../BrokenImages";
import Checkboxes from "../Checkboxes";
import DateTime from "../DateTime";
import Dropdown from "../Dropdown";
import PageNotFound from "../PageNotFound";
import Sliders from "../Slider";
import Switches from "../Switches";
import Table from "../Table";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/brokenimages" component={BrokenImages} />
        <Route path="/checkboxes" component={Checkboxes} />
        <Route path="/dropdown" component={Dropdown} />
        <Route path="/datetime" component={DateTime} />
        <Route path="/sliders" component={Sliders} />
        <Route path="/switches" component={Switches} />
        <Route path="/autocomplete" component={Autocomplete} />
        <Route path="/table" component={Table} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </ThemeProvider>
  );
}
