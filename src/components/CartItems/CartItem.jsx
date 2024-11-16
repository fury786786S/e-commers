// import React, { useContext } from 'react'
// import './CartItem.css'
// import { ShopContext } from '../../context/ShopContext'
// import remove_icon from '../Assets/cart_cross_icon.png'

// const CartItem = () => {
//     const { all_product, CartItem, removeFromCart } = useContext(ShopContext)
//     return (
//         <div className='cart'>
//             <div className="cart-format-main">
//                 <p>Products</p>
//                 <p>Tpttle</p>
//                 <p>Price</p>
//                 <p>Quantity</p>
//                 <p>Total</p>
//                 <p>Remove</p>
//             </div>
//             <hr />
//             {all_product.map((e) => {
//                 if (CartItem[e.id] > 0) {
//                     return <div>
//                         <div className="cart-format">
//                             <img src={e.image} className='cart-product-icon' alt="" />
//                             <p>{e.name} </p>
//                             <p>${e.new_price} </p>
//                             <button className='cart-quantity'>{CartItem[e.id]} </button>
//                             <p>{e.new_price*CartItem[e.id]} </p>
//                             <img src={remove_icon} onClick={() => { removeFromCart(e.id) }} alt="" />
//                         </div>
//                         <hr />
//                     </div>

//                 }
//                 return null;
//             })}
//             <div className="cart-down">
//             <div className="cart-total">
//                 <h1>Cart Total</h1>
//                 <div>
//                     <div className="cart-total-item">
//                         <p>Subtotal</p>
//                         <p>&#8377;{0}</p>
//                     </div>
//                     <hr />
//                     <div>
//                         <div className="cart-total-item">
//                             <p>Shipping Free</p>
//                             <p>Free</p>
//                         </div>
//                         <hr />
//                         <div className="cart-total-item">
//                             <h3>Total</h3>
//                             <h3>&#8377;{0}</h3>
//                         </div>
//                     </div>
//                     <button>PROCEED TO CHECKOUT</button>
//                 </div>
//                 <div className="cart-promocode">
//                     <p>IF you have a promo code, Enter it here</p>
//                     <div className="cart-promobox">
//                         <input type="text" placeholder='promo code' />
//                         <button>Submit</button>
//                     </div>
//                 </div>
//             </div>
//             </div>
//         </div>
//     )
// }

// const CartItem = () => {
//     const { all_product, cartItem, removeFromCart } = useContext(ShopContext);
  
//     const cartItems = all_product.filter((product) => cartItem[product.id] > 0);
  
//     if (cartItems.length === 0) {
//       return <div>Your cart is empty.</div>;
//     }
  
//     return (
//       <div className="cart">
//         <div className="cart-format-main">
//           <p>Products</p>
//           <p>Title</p>
//           <p>Price</p>
//           <p>Quantity</p>
//           <p>Total</p>
//           <p>Remove</p>
//         </div>
//         <hr />
//         {cartItems.map((e) => (
//           <div key={e.id} className="cart-format cart-format-main">
//             <img src={e.image} className="cart-product-icon" alt="" />
//             <p>{e.name}</p>
//             <p>&#8377;{e.new_price}</p>
//             <button className="cart-quantity">{cartItem[e.id]}</button>
//             <p>&#8377;{e.new_price * cartItem[e.id]}</p>
//             <img className='remove'
//               src={remove_icon}
//               onClick={() => removeFromCart(e.id)}
//               alt="Remove item"
//             />
//           </div>
//         ))}
//       </div>
//     );
//   };
  


// export default CartItem


import React, { useContext } from 'react';
import './CartItem.css';
import { ShopContext } from '../../context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';

const CartItem = () => {
    const { getTotalCartAmount,all_product, cartItem, removeFromCart } = useContext(ShopContext);

    const subtotal = all_product.reduce((total, product) => {
        const quantity = cartItem[product.id] || 0;
        return total + product.new_price * quantity;
    }, 0);

    const shipping = subtotal > 0 ? 0 : 0; // Adjust shipping logic as needed
    const total = subtotal + shipping;

    if (Object.values(cartItem).every((quantity) => quantity === 0)) {
        return <div className="cart-empty">Your cart is empty.</div>;
    }

    return (
        <div className="cart">
            <div className="cart-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((e) => {
                if (cartItem[e.id] > 0) {
                    return (
                        <div key={e.id}>
                            <div className="cart-format cart-format-main">
                                <img src={e.image} className="cart-product-icon " alt="" />
                                <p>{e.name}</p>
                                <p>${e.new_price}</p>
                                <button className="cart-quantity ">{cartItem[e.id]}</button>
                                <p>${e.new_price * cartItem[e.id]}</p>
                                <img
                                    src={remove_icon}
                                    onClick={() => removeFromCart(e.id)}
                                    alt="Remove item"
                                />
                            </div>
                            <hr />
                        </div>
                    );
                }
                return null;
            })}
            <div className="cart-down">
                <div className="cart-total">
                    <h1>Cart Total</h1>
                    <div>
                        <div className="cart-total-item">
                            <p>Subtotal</p>
                            <p>&#8377;{getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cart-total-item">
                            <p>Shipping Free</p>
                            <p>{shipping > 0 ? `&#8377;${shipping}` : 'Free'}</p>
                        </div>
                        <hr />
                        <div className="cart-total-item">
                            <h3>Total</h3>
                            <h3>&#8377;{total.toFixed(2)}</h3>
                        </div>
                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
                <div className="cart-promocode">
                    <p>If you have a promo code, enter it here:</p>
                    <div className="cart-promobox">
                        <input type="text" placeholder="Promo code" />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
