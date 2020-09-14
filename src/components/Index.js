import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "../app.css";
import { ProductConsumer } from "./Context";
import Details from "./Details";
import Modal from "./Modal";
// import Title from "./Title";
import Product from "./Product";
import Section from "./Section";
import Footer from "./Footer";
import Navi from "./Navi";
import HomePage from "./HomePage";
import Cart from "./Cart/Cart";
import Contact from "./Contact";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div id="wrapper" className="divided">
          <Navi />

          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/details" component={Details} />
            <Route path="/cart" component={Cart} />
            <Route path="/contact" component={Contact} />
          </Switch>
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}
