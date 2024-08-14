import {useState} from "react";
import {API_URL_POST_ORDER, calcTotalCount} from "../const";
import {useCart} from "../context/CartContext";
import {CartItem} from "./CartItem";
import {useOrder} from "../context/OrderContext";
import Modal from 'react-modal';

Modal.setAppElement('#root');

export const Cart = () => {
  const {cart, clearCart} = useCart();
  const [orderStatus, setOrderStatus] = useState(null);
  const [orderId, setOrderId] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const {orderDetails, clearOrderDetails} = useOrder();
  const [orderError, setOrderError] = useState([]);

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const orderData = {
      ...orderDetails,
      items: cart.map((item) => ({
        id: item.id,
        quantity: item.quantity,
      }))
    };
    console.log('orderData: ', orderData);

    try {
      const response = await fetch(API_URL_POST_ORDER, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'cache-control': 'no-cache',
        },
        body: JSON.stringify(orderData),
      });

      if (!response.ok) {
        const eresult = await response.json();
        let {errors} = eresult;
        if (errors) {
          // {value: '', msg: 'Имя обязательно', param: 'name', location: 'body'}
          errors.forEach(e => console.error('POST_ORDER', e.msg, ' -- param:', e.param, ', location:', e.location));
          errors = errors.filter(e => e.location === 'body');
          setOrderError(errors);
        }
        throw new Error('POST_ORDER Error fetching products.');
      }

      const result = await response.json();
      console.log('result: ', result);
      setOrderStatus('success');
      setOrderId(result.order.id);
      clearCart();
      clearOrderDetails();
    } catch (e) {
      setOrderStatus('error');
      console.error('Error:', e);
    } finally {
      setModalIsOpen(true);
    }

  };

  if (!cart) return;

  const totalCnt = calcTotalCount(cart);

  return (
    <section className="cart">
      <div className="container cart__container">
        {totalCnt ? <h2 className="cart__title">Корзина <span>({totalCnt})</span></h2> : <h2 className="cart__title">Корзина пуста.</h2>}


        {!totalCnt || (<>
          <ul className="cart__items">
            {cart.map((product) => (
              <CartItem key={product.id} {...product} />
            ))}
          </ul>

          <div className="cart__summary">
            <h3 className="cart__summary-title">Итого:</h3>
            <p className="cart__total">{cart.reduce((acc, p) => acc + p.price * p.quantity, 0)}&nbsp;₽</p>

            <button className="cart__order-button" type="submit" form="delivery-form"
              onClick={handleSubmit}
            >Заказать</button>
          </div>
        </>)}
      </div>

      <Modal className="modal-cart" overlayClassName="modal-cart__overlay"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        <h2 className="modal-cart__title">
          {orderStatus === 'success'
            ? `Заказ оформлен. Номер вашего заказа: ${orderId} `
            : 'Произошла ошибка при оформлении заказа.'
          }
        </h2>
        <ul className="modal-cart__error-list">
          {orderError.map(({msg}) => <li key={msg}>{msg}</li>)}
        </ul>
        <button className="modal-cart__button" onClick={closeModal}>закрыть</button>
      </Modal>
    </section>
  );
};
