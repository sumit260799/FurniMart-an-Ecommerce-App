import React from "react";
import { UseFilterContext } from "../context/filter_context";
import { getUniqueValues } from "../utils/formatPrice";
import { FaCheck } from "react-icons/fa";
import { formatPrice } from "../utils/formatPrice";
const Filters = () => {
  const {
    filters: {
      text,
      category,
      company,
      color,
      min_price,
      price,
      max_price,
      shipping,
    },
    all_products,
    updateFilters,
    clearFilters,
  } = UseFilterContext();
  const categories = getUniqueValues(all_products, "category");
  const companies = getUniqueValues(all_products, "company");
  const colors = getUniqueValues(all_products, "colors");

  return (
    <div className="p-4 bg-white rounded shadow-md">
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="mb-4">
          <input
            className="border border-gray-300 rounded-md p-2 bg-gray-100 w-full"
            type="text"
            name="text"
            value={text}
            placeholder="Search"
            onChange={updateFilters}
          />
        </div>
        <div className="mb-4">
          <h5 className="font-semibold">Category</h5>
          <div className="flex flex-col">
            {categories.map((c, index) => {
              return (
                <button
                  key={index}
                  onClick={updateFilters}
                  type="button"
                  name="category"
                  className={`${
                    category === c.toLowerCase() ? "active" : ""
                  } bg-gray-200 text-gray-800 py-1 px-3 rounded-md mr-2 mb-2 `}
                >
                  {c}
                </button>
              );
            })}
          </div>
        </div>
        <div className="mb-4">
          <h5 className="font-semibold">Company</h5>
          <select
            name="company"
            value={company}
            onChange={updateFilters}
            className="border border-gray-300 rounded-md p-2 bg-gray-100 w-full"
          >
            {companies.map((c, index) => {
              return (
                <option key={index} value={c}>
                  {c}
                </option>
              );
            })}
          </select>
        </div>
        <div className="mb-4">
          <h5 className="font-semibold">Colors</h5>
          <div className="flex colors">
            {colors.map((c, index) => {
              if (c === "all") {
                return (
                  <button
                    key={index}
                    name="color"
                    onClick={updateFilters}
                    data-color="all"
                    className={`${
                      color === "all" ? "all-btn active" : "all-btn"
                    } bg-gray-200 text-gray-800 py-0 px-3 rounded-md mr-2 mb-2 `}
                  >
                    all
                  </button>
                );
              }
              return (
                <button
                  key={index}
                  name="color"
                  style={{ background: c }}
                  className={`${
                    color === c
                      ? "color-btn active border border-black"
                      : "color-btn"
                  } py-1 px-3 rounded-md mr-2 mb-2`}
                  data-color={c}
                  onClick={updateFilters}
                >
                  {color === c ? <FaCheck /> : null}
                </button>
              );
            })}
          </div>
        </div>
        <button
          type="button"
          className="clear-btn py-2 px-4 bg-red-500 text-white rounded-md"
          onClick={clearFilters}
        >
          Clear Filters
        </button>
        <div className="form-control">
          <h5>price</h5>
          <p className="price">{formatPrice(price)}</p>
          <input
            type="range"
            name="price"
            onChange={updateFilters}
            min={min_price}
            max={max_price}
            value={price}
          />
        </div>
        {/* end of price */}
        {/* shipping */}
        <div className="form-control shipping">
          <label htmlFor="shipping">free shipping</label>
          <input
            type="checkbox"
            name="shipping"
            id="shipping"
            checked={shipping}
            onChange={updateFilters}
          />
        </div>
      </form>
    </div>
  );
};

export default Filters;
