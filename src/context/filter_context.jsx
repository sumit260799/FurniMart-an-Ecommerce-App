import React, { createContext, useContext, useEffect, useReducer } from "react";
import { LOAD_PRODUCTS } from "../actions";
import { useProductsContext } from "./products_context";
import reducer from "../reducers/filter_reducer";
const FilterContext = createContext();

const initialState = {
  filter_products: [],
  all_products: [],
  Grid_View: true,
};
export const FilterProvider = ({ children }) => {
  const { products } = useProductsContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products });
  }, [products]);

  return (
    <FilterContext.Provider value={{ ...state }}>
      {children}
    </FilterContext.Provider>
  );
};

export const UseFilterContext = () => {
  return useContext(FilterContext);
};
