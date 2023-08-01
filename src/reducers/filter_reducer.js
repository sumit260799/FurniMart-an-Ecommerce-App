import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
} from "../actions";

const filter_reducer = (state, action) => {
  if (action.type === LOAD_PRODUCTS) {
    return {
      ...state,
      all_products: [...action.payload],
      filter_products: [...action.payload],
    };
  }
  if (action.type === SET_LISTVIEW) {
    return {
      ...state,
      Grid_View: false,
    };
  }
  if (action.type === SET_GRIDVIEW) {
    return {
      ...state,
      Grid_View: true,
    };
  }
  if (action.type === UPDATE_SORT) {
    return { ...state, sort: action.payload };
  }
  if (action.type === SORT_PRODUCTS) {
    const { sort, filter_products } = state;
    let tempProducts = [];
    if (sort === "price-lowest") {
      tempProducts = filter_products.sort((a, b) => {
        return a.price - b.price;
      });
    }
    if (sort === "price-highest") {
      tempProducts = filter_products.sort((a, b) => b.price - a.price);
    }
    if (sort === "z-a" || sort === "a-z") {
      tempProducts = filter_products.sort((a, b) => {
        const name1 = a.name.toLowerCase();
        const name2 = b.name.toLowerCase();

        if (sort === "a-z") {
          return name2.localeCompare(name1);
        } else {
          return name1.localeCompare(name2);
        }
      });
    }

    return { ...state, filtered_products: tempProducts };
  }
};

export default filter_reducer;
