import {Navigate, Route, Routes} from "react-router-dom";
import {Products} from "./Products";
import {Promo} from "./Promo";
import {Cart} from "./Cart";
import {Order} from "./Order";
import {useCart} from "../context/CartContext";
import {calcTotalCount} from "../const";

export const Main = () => {
  const {cart} = useCart();
  const totalCnt = calcTotalCount(cart);
  const isCartEmpty = calcTotalCount(cart) === 0 ? 'isCartEmpty' : '';

  return (
    <main className={`main ${isCartEmpty}`}>
      <Routes>
        <Route path="/" element={<Navigate to="/products?category=coffee" />} />

        <Route path="/products" element={<>
          <Promo />
          <Products />
        </>} />

        <Route path="/cart" element={<>
          <Cart />
          {!totalCnt || <Order />}
        </>} />

        <Route path="*" element={
          <h1 style={{paddingTop: "150px", textAlign: "center"}}>404</h1>
        } />
      </Routes>
    </main>
  );
};
