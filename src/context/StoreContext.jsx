import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null)


const StoreContextProvider = (props)=>{

  const [cartitems,setCartItems] = useState({});

  const addToCart = (itemId)=>{
    if(!cartitems[itemId])
    {
        setCartItems((prev)=>({...prev,[itemId]:1}))
    }
    else{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }
  }
 
   const getTotalCartAmount = ()=>{
    let totalAmount = 0;
    for(const item in cartitems)
    {
       if(cartitems[item]>0){
        let iteminfo = food_list.find((product)=>{
          return product._id  === item
        })
        totalAmount += iteminfo.price * cartitems[item]
       }
      
    }
    return totalAmount
   }
  const removeFromCart = (itemId)=>{
 setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
  }
    const contextValue = {
       food_list,cartitems,setCartItems,addToCart,removeFromCart,getTotalCartAmount
    }
        return(
       <StoreContext.Provider value={contextValue}>
        {props.children}
        </StoreContext.Provider>
        )
    

    
}
export default StoreContextProvider