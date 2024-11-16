// import React, { createContext, useState } from "react";
// import all_product from '../components/Assets/all_product'
// import Product from "../pages/Product";
// import CartItem from "../components/CartItems/CartItem";

// export const ShopContext = createContext(null);
// const getDefaultCart = ()=>{
//     let cart = {};
//     for (let index = 0; index < all_product.length+1; index++) {
//         cart[index]=0
        
//     }
//     return cart;
//  }

// const ShopContextProvider = (props)=>{

//     const [cartItem, setCartItem] = useState(getDefaultCart());
    
    
//     const addToCart =(itemId) =>{
//         setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
//         console.log(cartItem)
//     }

//     const removeFromCart =(itemId) =>{
//         setCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
//     }

//     const getTotalCartAmount = () =>{
//         let totalAmount=0;
//         for(const item in cartItem)
//         {
//             if(cartItem[item]>0)
//             {
//                 let iteminfo = all_product.find(Product)=>Product.id===Number(item)
//                 totalAmount += iteminfo.new_price * CartItem[item]
//             }
//             return totalAmount
//         }
//     }

//     const contextValue ={getTotalCartAmount,all_product,cartItem,addToCart,removeFromCart};

//     return (
//         <ShopContext.Provider value={contextValue}>
//                 {props.children}
//         </ShopContext.Provider>
//     )
// }
// export default ShopContextProvider;

import React, { createContext, useState } from "react";
import all_product from "../components/Assets/all_product";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_product.length; index++) {
        cart[index] = 0;
    }
    return cart;
};

const ShopContextProvider = (props) => {
    const [cartItem, setCartItem] = useState(getDefaultCart());

    const addToCart = (itemId) => {
        setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        console.log(cartItem);
    };

    const removeFromCart = (itemId) => {
        setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    };

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItem) {
            if (cartItem[item] > 0) {
                let itemInfo = all_product.find((product) => product.id === Number(item));
                if (itemInfo) {
                    totalAmount += itemInfo.new_price * cartItem[item];
                }
            }
        }
        return totalAmount;
    };

    const getTotalCartItems = ()=>{
        let totalItem =0;
        for(const item in cartItem)
        {
            if(cartItem[item]>0)
            {
                totalItem+= cartItem[item]
            }
        }
        return totalItem
    }

    const contextValue = {
        getTotalCartItems,
        getTotalCartAmount,
        all_product,
        cartItem,
        addToCart,
        removeFromCart,
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
