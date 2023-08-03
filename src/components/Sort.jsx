import React from "react";
import { UseFilterContext } from "../context/filter_context";
import { BsFillGridFill, BsList } from "react-icons/bs";

const Sort = () => {
  const {
    filter_products: products,
    Grid_View,
    setGridView,
    setListView,
    sort,
    updateSort,
  } = UseFilterContext();

  return (
    <div className="sm:flex items-center justify-between space-x-4 mb-6">
      <div className="flex items-center space-x-4">
        <button
          className={`rounded-full p-2 ${
            Grid_View ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={setGridView}
        >
          <BsFillGridFill />
        </button>
        <button
          className={`rounded-full p-2 ${
            !Grid_View ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={setListView}
        >
          <BsList />
        </button>
        <hr className="border-2 flex-grow" />
        <form className="flex items-center">
          <label htmlFor="sort" className="mr-2">
            Sort by:
          </label>
          <select
            className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
            name="sort"
            id="sort"
            value={sort}
            onChange={updateSort}
          >
            <option value="price-lowest">Price (Lowest)</option>
            <option value="price-highest">Price (Highest)</option>
            <option value="z-a">Name (Z-A)</option>
            <option value="a-z">Name (A-Z)</option>
          </select>
        </form>
      </div>
      {/* <p className="ml-4">{products.length} products found</p> */}
    </div>
  );
};

export default Sort;
