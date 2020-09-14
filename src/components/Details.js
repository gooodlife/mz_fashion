import React, { Component } from "react";
import { ProductConsumer } from "./Context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";
import "bootstrap/dist/css/bootstrap.css";
import "../app.css";

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const {
            id,
            company,
            img,
            info,
            price,
            title,
            inCart,
          } = value.detailProduct;

          return (
            <div className="container py-5 ">
              {/* title */}
              <div className="row">
                <div
                  className="col-10 mx-auto text-center header4 text-slanted my-5" >
                  <h1>{title}</h1>

                </div>
              </div>
            

              {/* product info */}
              <div className="row" id="cad" >
                <div className="col-10 mx-auto col-md-6 my-6 my-3" >
                  <img src={img} className="img-fluid" alt="product" />
                </div>
                
                {/* product text */}
                <div
                  className="col-12 mx-auto col-md-6 my-3 
        text-capitalize"
                />
                <h1>model:{title}</h1>
                
{/* 
                <p
                  className="text-title text-uppercase text
    -muted mt-3 mb-2"
                >
        
                  made by:<span className="text-uppercase">{company}</span>
                </p> */}
               
               
                <p>
                  <strong>
                    price:<span>$</span>
                    {price}
                  </strong>
                </p>
                <p className="text-capitalize font-weight-bold mt-3 mb-0">
                  some info about the product:
                </p>

                <p className="text-muted lead">{info}</p>

                <Link to="/">
                  <ButtonContainer className="button">back to products</ButtonContainer>
                </Link>

                <ButtonContainer className="button"
                  cart
                  disabled={inCart ? true : false}
                  onClick={() => {
                    value.addToCart(id);
                    value.openModal(id);
                  }}
                >
                  {inCart ? "inCart" : "add to cart"}
                </ButtonContainer>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
