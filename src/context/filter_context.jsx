import React, { createContext, useContext, useEffect, useReducer } from "react";
import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
} from "../actions";
import { useProductsContext } from "./products_context";
import reducer from "../reducers/filter_reducer";
const FilterContext = createContext();

const initialState = {
  filter_products: [],
  all_products: [],
  Grid_View: true,
  sort: "price-lowest",
};
export const FilterProvider = ({ children }) => {
  const { products } = useProductsContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products });
  }, [products]);

  useEffect(() => {
    dispatch({ type: SORT_PRODUCTS });
  }, [state.sort]);

  const setListView = () => {
    dispatch({ type: SET_LISTVIEW });
  };
  const setGridView = () => {
    dispatch({ type: SET_GRIDVIEW });
  };
  const updateSort = (e) => {
    const value = e.target.value;
    dispatch({ type: UPDATE_SORT, payload: value });
  };
  return (
    <FilterContext.Provider
      value={{ ...state, setListView, updateSort, setGridView }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const UseFilterContext = () => {
  return useContext(FilterContext);
};
