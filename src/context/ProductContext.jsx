/* eslint-disable react-refresh/only-export-components */
import {useContext, useEffect, useRef} from "react";
import {useState} from "react";
import {createContext} from "react";
import {API_URL_PRODUCTS_BY_CATEGORY} from "../const";

const ProductContext = createContext();

export const ProductProvider = ({children}) => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('');
  const productsRef = useRef(null);

  const categories = {
    tea:      'Чаи',
    coffee:      'Кофе',
    teapots: 'Чайники',
    cezves: 'Турки',
    other:'Прочее',
  }

  useEffect(() => {
    if (!category) return;

    fetch(API_URL_PRODUCTS_BY_CATEGORY + category)
      .then(res => {
        if (!res.ok)
          throw new Error('Error fetching products. res:', res);
        return res.json();
      })
      .then(data => setProducts(data))
      .catch(err => console.log('Error fetching products. err:', err));

  }, [category]);

  return (
    <ProductContext.Provider value={{products, setCategory, categories, productsRef}}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => {
  return useContext(ProductContext);
}