/* eslint-disable react-refresh/only-export-components */
import {useContext} from "react";
import {useState} from "react";
import {createContext} from "react";

const OrderContext = createContext();

const orderDetailsDefault = {
  name: "",
  phone: "",
  address: "",
  payment: "card",
};

export const OrderProvider = ({children}) => {
  const [orderDetails, setOrderDetails] = useState(orderDetailsDefault);

  const updateOrderDetails = (field, value) => {
    setOrderDetails(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const clearOrderDetails = () => {
    setOrderDetails(orderDetailsDefault);
  };

  return (
    <OrderContext.Provider value={{orderDetails, updateOrderDetails, clearOrderDetails}}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => {
  return useContext(OrderContext);
};