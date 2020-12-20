import { Route, Switch } from "react-router-dom";
import BrokenImages from "../BrokenImages"
import Home from "../Home";
import Checkboxes from "../Checkboxes";
import Dropdown from "../Dropdown/Dropdown";


const Routes = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/brokenimages" component={BrokenImages} />
        <Route path="/checkboxes" component={Checkboxes} />
        <Route path="/dropdown" component={Dropdown} />
    </Switch>

)

export default Routes;