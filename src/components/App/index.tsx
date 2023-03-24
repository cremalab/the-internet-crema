import "./styles.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "../Routes";

export function App() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}
