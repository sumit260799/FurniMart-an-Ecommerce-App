import React from "react";
import { useFilterContext } from "../context/filter_context";
import { BsFillGridFill, BsList } from "react-icons/bs";

const Sort = () => {
  const {
    filter_products: products,
    grid_view,
    setGridView,
    setListView,
    sort,
    updateSort,
  } = useFilterContext();

  return (
    <div className="sort-container p-4 border rounded bg-white mb-4">
      <div className="flex flex-row justify-center mb-2">
        <button
          onClick={setGridView}
          className={`flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 ${
            grid_view ? "active-btn" : ""
          }`}
        >
          <BsFillGridFill />
        </button>
        <button
          onClick={setListView}
          className={`flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 ${
            !grid_view ? "active-btn" : ""
          }`}
        >
          <BsList />
        </button>
      </div>
      <p className="text-center mb-2">{products.length} products found</p>
      <hr className="mb-2" />
      <form>
        <label htmlFor="sort" className="font-bold block">
          Sort by
        </label>
        <select
          name="sort"
          id="sort"
          value={sort}
          onChange={updateSort}
          className="sort-input w-full p-1 text-sm border rounded"
        >
          <option value="price-lowest">Price (Lowest)</option>
          <option value="price-highest">Price (Highest)</option>
          <option value="name-a">Name (A - Z)</option>
          <option value="name-z">Name (Z - A)</option>
        </select>
      </form>
    </div>
  );
};

export default Sort;
