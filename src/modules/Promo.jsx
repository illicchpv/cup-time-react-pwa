import {Link, useSearchParams} from "react-router-dom";
import {buildDate} from "../const";

export const Promo = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  return (
    <section className="promo">
      <div className="container">
        <div className="promo__container">
          <h1 className="promo__title" title={`buildDate: ${buildDate}`}>Попробуй новый вкус Арабики</h1>

          {category != "coffee"
            ? <Link className="promo__link" to="/products?category=coffee">Перейти к кофе</Link>
            : <Link style={{visibility: "hidden"}} className="promo__link" to="/products?category=coffee">Перейти к кофе</Link>
          }
        </div>
      </div>
    </section>
  );
};
