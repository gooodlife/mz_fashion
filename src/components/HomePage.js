import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../app.css";
import { ProductConsumer } from "./Context";
import Modal from "./Modal";
// import Title from "./Title";
import Product from "./Product";
import Section from "./Section";

export default class HomePage extends Component {
  render() {
    return (
      <React.Fragment>
        <div id="wrapper" className="divided">
          <div className="container-fluid">
            <div className="py-5 bot">
              <div className="container">
                <div id="nameClass" className="container">
                  <h1 id="wears">YOUR WEARS</h1>
                </div>
                <div className="row">
                  <ProductConsumer>
                    {(value) => {
                      return value.products.map((product) => {
                        return <Product key={product.id} product={product} />;
                      });
                    }}
                  </ProductConsumer>
                </div>
              </div>
            </div>
          </div>
          <Section />
          <Modal />
          
        </div>
      </React.Fragment>
    );
  }
}
