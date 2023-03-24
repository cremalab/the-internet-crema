import { Route } from "react-router-dom";
import BrokenImages from "../BrokenImages";
import Home from "../Home";
import Checkboxes from "../Checkboxes";
import Dropdown from "../Dropdown/Dropdown";
import DateTime from "../DateTime";
import Sliders from "../Slider";
import { Switch } from "@material-ui/core";
import Autocomplete from "../Autocomplete";

const Routes = () => (
  <>
    <Route exact path="/" component={Home} />
    <Route path="/brokenimages" component={BrokenImages} />
    <Route path="/checkboxes" component={Checkboxes} />
    <Route path="/dropdown" component={Dropdown} />
    <Route path="/datetime" component={DateTime} />
    <Route path="/sliders" component={Sliders} />
    <Route path="/switch" component={Switch} />
    <Route path="/autocomplete" component={Autocomplete} />
  </>
);

export default Routes;
