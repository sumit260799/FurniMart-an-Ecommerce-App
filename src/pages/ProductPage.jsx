import React from "react";
import { Sort, Filters, ProductList } from "../components";
const ProductPage = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-4 w-[95%] lg:w-[80%] justify-center items-start my-10 mx-auto gap-5">
        <div className="col-span-1 lg:pl-5 py-1 ">
          <Filters />
        </div>
        <div className="col-span-3">
          <Sort />
          <ProductList />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
