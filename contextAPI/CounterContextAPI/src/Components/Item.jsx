//import React from "react";
import "./Item.css";
const Item = (props) => {
  return (
    <div className="item-cart">
      <div>{props.name}</div>
      <p>Price : ${props.price}</p>
      <button>Add To Cart</button>
    </div>
  );
};

export default Item;
