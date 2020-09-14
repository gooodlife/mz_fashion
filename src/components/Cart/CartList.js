import React from "react";
import CartItem from "./CartItem";

export default function CartList({ value }) {
  const { cart } = value;
  console.log(value);
  console.log(JSON.stringify(cart));

  return (
    <React.Fragment>
      <div className="container">
        {cart.map((item) => {
          return <CartItem key={item.id} item={item} value={value} />;
        })}
      </div>
    </React.Fragment>
  );
}
