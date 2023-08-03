import React from "react";
import GridView from "./GridView";
import ListView from "./ListView";
import { useFilterContext } from "../context/filter_context";

const ProductList = () => {
  const { filter_products: products, Grid_View } = useFilterContext();

  if (products.length < 1) {
    return (
      <div className="text-center py-4">
        <h5 className="text-red-600 text-lg font-bold mt-5">
          Sorry, no products matched your search.
        </h5>
      </div>
    );
  }

  return (
    <div className="grid gap-4">
      {Grid_View === false ? (
        <ListView products={products} />
      ) : (
        <GridView products={products} />
      )}
    </div>
  );
};

export default ProductList;
