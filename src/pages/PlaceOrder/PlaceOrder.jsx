import React, { useContext } from "react";
import "./Placeorder.css";
import { StoreContext } from "../../context/StoreContext";

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title">Delivary information</p>
        <div className="multi-fields">
          <input type="text" placeholder="First name" />
          <input type="text" placeholder="Last name" />
        </div>
        
          <input type="email" placeholder="email" />
          <input type="text" placeholder="street" />

          <div className="multi-fields">
          <input type="text" placeholder="city" />
          <input type="text" placeholder="state" />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder="zipcode" />
          <input type="text" placeholder="country" />
        </div>
        <input type="number" placeholder="phone"/>
      
      </div>
      
    



      <div className="right">
        <div className="cart-total">
          <h2>cart total</h2>
          <div>
            <div className="cart-total-details">
              <p>subtotal</p>
              <p>{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivary Fee</p>
              <p>{getTotalCartAmount === 0 ? 0 : getTotalCartAmount() +2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>total</b>
              <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() +2}</b>
            </div>
            <hr />
          </div>
          <button>Proceed To Payment</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
