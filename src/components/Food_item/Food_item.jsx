import React,{useContext, useState} from 'react'
import './Food_item.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';

const Food_item = ({id,name,price,description,image}) => {


   // const [itemcount,setItemCount] = useState(0);
    const {cartitems,setCartItems,addToCart,removeFromCart} = useContext(StoreContext)
  return (
    <div className='food-item'>
         <div className="food-item-image-container">
            <img className="food-item-image" src={image} alt="" />
            {
                !cartitems[id] ? <img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white}
                  alt=""/>
                 :<div className='food-item-counter'>
                    <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt=""/>
                    <p>{cartitems[id]}</p>
                    <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt=""/>

      </div>           }
         </div>
         <div className="food-item-info">
            <div className='food-item-name-rating'>
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>
            <p className="food-item-desc">
                {description}
            </p>
            <p className='food-item-price'>
              ${price}
            </p>
         </div>
      
    </div>
  )
}

export default Food_item
