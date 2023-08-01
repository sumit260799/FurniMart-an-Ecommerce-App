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
    <div className="wrapper  flex  items-center justify-end space-x-4">
      <div className="flex items-center space-x-4">
        {" "}
        {/* Add 'items-center' class */}
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
        <hr className="flex-1 border-2" />
        <form className="flex items-center">
          <label htmlFor="" className="mr-2">
            sort by
          </label>

          <select
            className="p-2 rounded-md"
            name="sort"
            id=""
            value={sort}
            onChange={updateSort}
          >
            <option value="price-lowest">price (lowest)</option>
            <option value="price-highest">price (highest)</option>
            <option value="z-a">name (a-z)</option>
            <option value="a-z">name (z-a)</option>
          </select>
        </form>
      </div>
      <p className="flex-1 ml-4"> {products.length} products found</p>{" "}
      {/* Add 'flex-1' class to allow the <p> to fill the remaining space */}
    </div>
  );
};

export default Sort;
