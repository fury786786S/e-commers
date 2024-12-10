
// import React, { useContext } from 'react';
// import './CartItem.css';
// import { ShopContext } from '../../context/ShopContext';
// import remove_icon from '../Assets/cart_cross_icon.png';

// const CartItem = () => {
//     const { getTotalCartAmount,all_product, cartItem, removeFromCart } = useContext(ShopContext);

//     const subtotal = all_product.reduce((total, product) => {
//         const quantity = cartItem[product.id] || 0;
//         return total + product.new_price * quantity;
//     }, 0);

//     const shipping = subtotal > 0 ? 0 : 0; // Adjust shipping logic as needed
//     const total = subtotal + shipping;

//     if (Object.values(cartItem).every((quantity) => quantity === 0)) {
//         return <div className="cart-empty">Your cart is empty.</div>;
//     }

//     return (
//         <div className="cart">
//             <div className="cart-format-main">
//                 <p>Products</p>
//                 <p>Title</p>
//                 <p>Price</p>
//                 <p>Quantity</p>
//                 <p>Total</p>
//                 <p>Remove</p>
//             </div>
//             <hr />
//             {all_product.map((e) => {
//                 if (cartItem[e.id] > 0) {
//                     return (
//                         <div key={e.id}>
//                             <div className="cart-format cart-format-main">
//                                 <img src={e.image} className="cart-product-icon " alt="" />
//                                 <p>{e.name}</p>
//                                 <p>&#8377;{e.new_price}</p>
//                                 <button className="cart-quantity ">{cartItem[e.id]}</button>
//                                 <p>&#8377;{e.new_price * cartItem[e.id]}</p>
//                                 <img
//                                     src={remove_icon}
//                                     onClick={() => removeFromCart(e.id)}
//                                     alt="Remove item"
//                                 />
//                             </div>
//                             <hr />
//                         </div>
//                     );
//                 }
//                 return null;
//             })}
//             <div className="cart-down">
//                 <div className="cart-total">
//                     <h1>Cart Total</h1>
//                     <div>
//                         <div className="cart-total-item">
//                             <p>Subtotal</p>
//                             <p>&#8377;{getTotalCartAmount()}</p>
//                         </div>
//                         <hr />
//                         <div className="cart-total-item">
//                             <p>Shipping Free</p>
//                             <p>{shipping > 0 ? `&#8377;{shipping}` : 'Free'}</p>
//                         </div>
//                         <hr />
//                         <div className="cart-total-item">
//                             <h3>Total</h3>
//                             <h3>&#8377;{total.toFixed(2)}</h3>
//                         </div>
//                     </div>
//                     <button>PROCEED TO CHECKOUT</button>
//                 </div>
//                 <div className="cart-promocode">
//                     <p>If you have a promo code, enter it here:</p>
//                     <div className="cart-promobox">
//                         <input type="text" placeholder="Promo code" />
//                         <button>Submit</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CartItem;

import React, { useContext, useState } from 'react';
import './CartItem.css';
import { ShopContext } from '../../context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';

const CartItem = () => {
    const { getTotalCartAmount, all_product, cartItem, removeFromCart } = useContext(ShopContext);

    const [promoCode, setPromoCode] = useState('');
    const [promoMessage, setPromoMessage] = useState('');
    const [discount, setDiscount] = useState(0);

    const validPromoCodes = {
        SAVE10: 10, // 10% discount
        FREESHIP: 0, // Free shipping
        SALE20: 20, // 20% discount
    };

    const applyPromoCode = () => {
        let isValid = false;

        do {
            const discountValue = validPromoCodes[promoCode.trim()];
            if (discountValue !== undefined) {
                setPromoMessage(`Promo code applied! You saved ${discountValue}%! 🎉`);
                setDiscount(discountValue);
                isValid = true;
            } else {
                setPromoMessage('Invalid promo code. Try again.');
                break; // Exit loop after invalid attempt
            }
        } while (!isValid);
    };

    const subtotal = all_product.reduce((total, product) => {
        const quantity = cartItem[product.id] || 0;
        return total + product.new_price * quantity;
    }, 0);

    const shipping = subtotal > 0 ? 0 : 0; // Adjust shipping logic as needed
    const discountAmount = (subtotal * discount) / 100;
    const total = subtotal - discountAmount + shipping;

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
                                <img src={e.image} className="cart-product-icon" alt="" />
                                <p>{e.name}</p>
                                <p>&#8377;{e.new_price}</p>
                                <button className="cart-quantity">{cartItem[e.id]}</button>
                                <p>&#8377;{e.new_price * cartItem[e.id]}</p>
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
                            <p>&#8377;{subtotal.toFixed(2)}</p>
                        </div>
                        <hr />
                        <div className="cart-total-item">
                            <p>Discount</p>
                            <p>&#8377;{discountAmount.toFixed(2)}</p>
                        </div>
                        <hr />
                        <div className="cart-total-item">
                            <p>Shipping</p>
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
                        <input
                            type="text"
                            placeholder="Promo code"
                            value={promoCode}
                            onChange={(e) => setPromoCode(e.target.value)}
                        />
                        <button onClick={applyPromoCode}>Submit</button>
                    </div>
                    {promoMessage && (
                        <p
                            style={{
                                color: promoMessage.includes('applied') ? 'green' : 'red', // Green for success, red for error
                                marginTop: '100px',
                            }}
                        >
                            {promoMessage}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CartItem;
