import React from "react";
import Filters from "../components/Filters";
import Sort from "../components/Sort";
import ProductList from "../components/ProductList";
const ProductPage = () => {
  return (
    <div>
      <div>
        <Filters />
        <div>
          <Sort />
          <ProductList />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
