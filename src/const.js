export const API_URL = 'https://cup-time-api-q31j.onrender.com';

export const API_URL_ALL_PRODUCTS = 'https://cup-time-api-q31j.onrender.com/api/products';
export const API_URL_PRODUCTS_BY_CATEGORY = 'https://cup-time-api-q31j.onrender.com/api/products/';
export const API_URL_PRODUCTS_BY_IDS = 'https://cup-time-api-q31j.onrender.com/api/products/list?ids=';
export const API_URL_POST_ORDER = 'https://cup-time-api-q31j.onrender.com/api/orders';

/*
https://cup-time-api-q31j.onrender.com/api-docs/
  Product API
 

https://cup-time-api-q31j.onrender.com/api/products

/api/products/{category} // получить продукты по категории
/api/products // Получить все продукты
/api/products/list?ids=1,2,3 // получить список товаров по id (1,2,3 для примера)
/api/orders // POST запрос для отправки заказа



{
    "id": 1,
    "title": "Кокосовая матча",
    "img": "/images/tea1.jpg",
    "price": 390,
    "additional": {
        "вес": "100 г",
        "дата сбора": "14.08.2023",
        "страна": "Япония"
    }
}
    
*/

export function calcTotalCount(cart) {
  if (!cart) return 0;
  return cart.reduce((acc, p) => acc + p.quantity, 0);
}

export const debounce = (fn, ms) => {
  let lastCall = 0;
  let lastCallTimer = 0;

  return function (...args) {
    const prevCall = lastCall;
    lastCall = Date.now();
    if (prevCall && lastCall - prevCall < ms) {
      clearTimeout(lastCallTimer);
    }
    lastCallTimer = setTimeout(() => fn.apply(this, args), ms);
  };
};

export const getActiveClass = (category) => {
  // console.log('category: ', category, "location.href: ", location.href);
  if(!category) return '';
  if (location.href.includes('#/products')) {
    const hash = location.hash;
    if(hash.includes(`?category=${category}`)) return 'active';
    return "";
  } else {
    const currentCategory = new URLSearchParams(location.search).get("category");
    return currentCategory === category ? "active" : "";
  }
};

// eslint-disable-next-line no-undef
export const buildDate = new Date(__BUILD_DATE__).toLocaleString('ru', {year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'});
