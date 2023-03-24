import "./styles.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "../Routes";
import { Link } from "react-router-dom";

export function App() {
  return (
    <Router>
      <Link to="/">HOME </Link>
      <Routes />
    </Router>
  );
}
