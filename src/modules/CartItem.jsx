import {useState} from "react";
import {API_URL} from "../const";
import {useCart} from "../context/CartContext";


export const CartItem = ({id, img, title, price, quantity}) => {
  // console.log('id: ', id);
  const [itemQuantity, setItemQuantity] = useState(quantity);
  const {updateQuantity, removeFromCart} = useCart();

  const handleDecrementQuantity = () => {
    const newQuantity = itemQuantity - 1;
    if (newQuantity > 0) {
      setItemQuantity(newQuantity);
      updateQuantity(id, newQuantity);
    } else {
      removeFromCart(id);
    }
  };
  const handleIncrementQuantity = () => {
    const newQuantity = itemQuantity + 1;
    setItemQuantity(newQuantity);
    updateQuantity(id, newQuantity);
  };

  return (
    <li className="cart-item">
      <img className="cart-item__image" src={`${API_URL}${img}`} alt={title} />

      <div className="cart-item__info">
        <h3 className="cart-item__title">{title}</h3>

        <div className="cart-item__quantity">
          <button className="cart-item__quantity-button cart-item__quantity-button_minus"
            onClick={handleDecrementQuantity}
          >-</button>

          {/* <input className="cart-item__quantity-input" type="number" value={itemQuantity} readOnly /> */}
          <span className="cart-item__quantity-input">{itemQuantity}</span>

          <button className="cart-item__quantity-button cart-item__quantity-button_plus"
            onClick={handleIncrementQuantity}
          >+</button>
        </div>

        <p className="cart-item__price">{price * quantity}&nbsp;₽</p>
      </div>
    </li>

  );
};
