// import React, { useContext } from "react";
// import "./CartItems.css";
// import { ShopContext } from "../../Context/ShopContext";
// import remove_icon from "../Assets/cart_cross_icon.png";

// const CartItems = () => {
//     const { getTotalCartAmount, cartItems, removeFromCart } = useContext(ShopContext);

//     return (
//         <div className="cartitems">
//             <div className="cartitems-format-main">
//                 <p>Product ID</p>
//                 <p>Quantity</p>
//                 <p>Remove</p>
//             </div>
//             <hr />

//             {Object.keys(cartItems).map((itemId) => (
//                 <div key={itemId}>
//                     <div className="cartitems-format cartitems-format-main">
//                         <p>{itemId}</p>
//                         <button className="cartitems-quantity">{cartItems[itemId]}</button>
//                         <img className="cartitems-remove-icon" src={remove_icon} onClick={() => removeFromCart(itemId)} alt="Remove" />
//                     </div>
//                     <hr />
//                 </div>
//             ))}

//             <div className="cartitems-down">
//                 <div className="cartitems-total">
//                     <h1>Cart Totals</h1>
//                     <div>
//                         <div className="cartitems-total-item">
//                             <p>Subtotal</p>
//                             <p>${getTotalCartAmount()}</p>
//                         </div>
//                         <hr />
//                         <div className="cartitems-total-item">
//                             <p>Shipping Fee</p>
//                             <p>Free</p>
//                         </div>
//                         <hr />
//                         <div className="cartitems-total-item">
//                             <h3>Total</h3>
//                             <h3>${getTotalCartAmount()}</h3>
//                         </div>
//                     </div>
//                     <button>PROCEED TO CHECKOUT</button>
//                 </div>
//                 <div className="cartitems-promocode">
//                     <p>If you have a promo code, enter it here</p>
//                     <div className="cartitems-promobox">
//                         <input type="text" placeholder="Promo code" />
//                         <button>Submit</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CartItems;