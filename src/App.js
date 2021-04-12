import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio.js";
import Contact from "./pages/Contact.js";
import Container from "./components/Container";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";
import Row from "./components/Row";

function App() {
  return (
    <Router>
        <Container>
          <Row>
            <h1 className="rounded col-sm-12 col-lg-3">Muhammad Usman</h1>
            <Navbar/>

            <Switch>
              <Route exact path="/Portfolio" component={Portfolio} />
              <Route exact path="/Contact" component={Contact} /> 
              <Route exact path="/About"component={About} />
              </Switch>  
          </Row>
        </Container>
      <Footer />
    </Router>
  );
}

export default App; 
