import React from "react";
import GridView from "./GridView";
import ListView from "./ListView";
import { UseFilterContext } from "../context/filter_context";
const ProductList = () => {
  const { filter_products: products, Grid_View } = UseFilterContext();
  if (products.length < 1) {
    return (
      <h5 style={{ textTransform: "none" }}>
        Sorry, np products matched your search.
      </h5>
    );
  }
  if (Grid_View === false) {
    return <ListView products={products} />;
  }
  return <GridView products={products} />;
};

export default ProductList;
