import { Route, Switch } from "react-router-dom";
import BrokenImages from "../BrokenImages";
import Home from "../Home";
import Checkboxes from "../Checkboxes";
import Dropdown from "../Dropdown/Dropdown";
import DateTime from "../DateTime";
import Sliders from "../Slider";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/brokenimages" component={BrokenImages} />
    <Route path="/checkboxes" component={Checkboxes} />
    <Route path="/dropdown" component={Dropdown} />
    <Route path="/datetime" component={DateTime} />
    <Route path="/sliders" component={Sliders} />
  </Switch>
);

export default Routes;
