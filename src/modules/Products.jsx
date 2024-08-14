import {useEffect} from "react";
import {useProduct} from "../context/ProductContext";
// import {products} from "../products";
import {Product} from "./Product";
import {useSearchParams} from "react-router-dom";
import {SkeletonLoader} from "./SkeletonLoader";

export const Products = () => {
  const [searchParams] = useSearchParams();
  // const productsRef = useRef(null); //плохо т.к. срабатывает при заходе на сайт. используем ProductProvider
  const {products, setCategory, categories, productsRef} = useProduct();

  const category = searchParams.get('category');
  // console.log('products: ', products);

  useEffect(() => {
    setCategory(category);
  }, [category, setCategory]);

  // плохо т.к. срабатывает при заходе на сайт.
  // useEffect(() => {
  //   productsRef.current.scrollIntoView({block: 'start', behavior: 'smooth'});
  // }, [category]);

  return (
    <section className="products" id="products" ref={productsRef}>
      <div className="container">
        <h2 className="products__title">{categories[category]}</h2>

        <ul className="products__list">
          {products.length ? products.map((product) => (
            <Product key={product.id} {...product} />
          )) : <SkeletonLoader />}
        </ul>
      </div>
    </section>
  );
};
