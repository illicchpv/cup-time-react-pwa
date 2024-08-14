import {useState} from "react";
import {API_URL} from "../const";
import {ProductModal} from "./ProductModal";

export const Product = (data) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const {title, price, img: image} = data;
  // console.log('data: ', data);

  const openModal = (e) => {
    e.preventDefault();
    setModalIsOpen(true);
  };
  const closeModal = () => {setModalIsOpen(false);};

  return (
    <li className="products__item">
      <a className="products__link" href="#!" onClick={openModal} aria-label={`подробнее о ${title}`}>
        <article className="product">
          <img className="product__image" src={`${API_URL}${image}`} alt={title} />

          <div className="product__content">
            <h3 className="product__title">{title}</h3>

            <p className="product__price">{price}&nbsp;₽</p>
          </div>
        </article>
      </a>
      <ProductModal isOpen={modalIsOpen} onRequestClose={closeModal} data={data}/>
    </li>
  );
};
