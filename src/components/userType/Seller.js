import React from "react";
import seller from "../../assets/seller.png";
import "./user.css";

function Seller() {
  return (
    <div className="user">
      <div className="center">
        <img src={seller} alt="" />
        <p>
          as a <strong>seller</strong>, you need to create an account then navigate to your
          userpage, start publishing your products. get notified when a product
          is viewed or added to cart
        </p>
        <button>Sign up</button>
      </div>
    </div>
  );
}

export default Seller;
