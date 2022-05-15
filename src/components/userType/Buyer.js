import React from "react";
import buyer from '../../assets/buyer.png'
import './user.css'

function Buyer() {
  return (
    <div className="user">
      
      <div className="center">
      <img src={buyer} alt="" />
      <p>
        as a <strong>Buyer</strong>, you need to create an account then navigate to products page
        to explore products of your choice and add them to cart
      </p>
      <button>Sign up</button>
      </div>
      
    </div>
  );
}

export default Buyer;
