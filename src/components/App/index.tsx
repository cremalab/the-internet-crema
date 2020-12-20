import "./styles.css"
import React from 'react';
import { BrowserRouter as Router } from "react-router-dom"
import Routes from '../Routes'

export function App() {

  return (
    <Router>
      <Routes />
    </Router>

  )
}
