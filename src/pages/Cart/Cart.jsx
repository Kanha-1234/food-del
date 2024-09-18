import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom';
const Cart = () => {

  const {cartitems,food_list,removeFromCart,getTotalCartAmount} = useContext(StoreContext);
  
   const navigate = useNavigate()
  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br/>
        <hr/>
        {
          food_list.map((item,index)=>{
            if(cartitems[item._id]>0){
              return(
                <div>
                  <div className="cart-items-title cart-items-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartitems[item._id]}</p>
                  <p>${item.price * cartitems[item._id]}</p>
                  <p onClick={()=>removeFromCart(item._id)} className='cross'>X</p>
                </div> 
                <hr/>
                  </div>
              )
            }
          })
        }
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>cart total</h2>
          <div>
            <div className="cart-total-details">
               <p>subtotal</p>
               <p>{getTotalCartAmount()}</p>
            </div>
            <hr/>
            <div className="cart-total-details">
               <p>Delivary Fee</p>
               <p>{getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr/>
            <div className="cart-total-details">
             <b>total</b>
             <b>${getTotalCartAmount() === 0 ? 0:getTotalCartAmount() + 2}</b>
            </div>
            <hr/>
          </div>
          <button onClick={()=>navigate('/order')}>Proceed To Checkout</button>
        </div>
        <div className="cart-promo-code">
          <p>promo code enter here</p>
          <div className="cart-promocode-input">
            <input type="text" placeholder='enter promo code' />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
