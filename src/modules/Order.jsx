import {useOrder} from "../context/OrderContext";

export const Order = () => {
  const {orderDetails, updateOrderDetails} = useOrder();

  const handleChange = (e) => {
    const {name, value} = e.target;
    updateOrderDetails(name, value);
  };

  return (
    <section className="order">
      <div className="container order__container">
        <h2 className="order__title">Доставка</h2>

        <form className="order__form">
          {/* <fieldset className="order__data-fields"> */}
            <input className="order__input order__input_name" type="text" placeholder="Имя" 
              name="name"
              value={orderDetails.name}
              onChange={handleChange}
            />

            <input className="order__input order__input_phone" type="tel" placeholder="Телефон" 
              name="phone"
              value={orderDetails.phone}
              onChange={handleChange}
            />

            <input className="order__input order__input_address" type="text" placeholder="Адрес" 
              name="address"
              value={orderDetails.address}
              onChange={handleChange}
            />
          {/* </fieldset> */}

          <fieldset className="order__payment">
            <h3 className="order__payment-title">Оплата:</h3>

            <label className="order__payment-label">
              <input className="order__radio" type="radio"
                name="payment"
                value="card" 
                checked={orderDetails.payment === "card"}
                onChange={handleChange}
              />
              картой
            </label>

            <label className="order__payment-label">
              <input className="order__radio" type="radio" 
                name="payment" 
                value="cash"
                checked={orderDetails.payment === "cash"}
                onChange={handleChange}
              />
              наличные
            </label>
          </fieldset>
        </form>

      </div>
    </section>
  );
};
