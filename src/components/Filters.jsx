import React from "react";
import { useFilterContext } from "../context/filter_context";
import { getUniqueValues } from "../utils/formatPrice";
import { FaCheck } from "react-icons/fa";
import { Button } from "@mui/material";

export default function Filters() {
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
    updateFilters,
    all_products,
    clearFilters,
  } = useFilterContext();
  const categories = getUniqueValues(all_products, "category");
  const companies = getUniqueValues(all_products, "company");
  const colors = getUniqueValues(all_products, "colors");
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="content">
        <form onSubmit={(e) => e.preventDefault()}>
          {/* search input */}
          <div className="form-control mb-4">
            <input
              type="text"
              name="text"
              value={text}
              placeholder="Search"
              onChange={updateFilters}
              className="search-input w-full px-4 py-2 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
            />
          </div>
          {/* end of search input */}
          {/* category */}
          <div className="form-control mb-4">
            <h5 className="mb-2">Category</h5>
            <div className="flex flex-wrap gap-2">
              {categories.map((c, index) => (
                <button
                  key={index}
                  onClick={updateFilters}
                  type="button"
                  name="category"
                  className={`${
                    category === c.toLowerCase()
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-600"
                  } rounded-md px-4 py-2 text-sm`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
          {/* end of category */}
          {/* company */}
          <div className="form-control mb-4">
            <h5 className="mb-2">Company</h5>
            <select
              name="company"
              value={company}
              onChange={updateFilters}
              className="company w-full px-4 py-2 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
            >
              {companies.map((c, index) => (
                <option key={index} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
          {/* end of company */}
          {/* colors */}
          <div className="form-control mb-4">
            <h5 className="mb-2">Colors</h5>
            <div className="flex flex-wrap gap-2">
              {colors.map((c, index) =>
                c === "all" ? (
                  <button
                    key={index}
                    name="color"
                    onClick={updateFilters}
                    data-color="all"
                    className={`${
                      color === "all"
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200 text-gray-600"
                    } rounded-md px-4 py-2 text-sm`}
                  >
                    All
                  </button>
                ) : (
                  <button
                    key={index}
                    name="color"
                    style={{ background: c }}
                    className={`${
                      color === c
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200 text-gray-600"
                    } rounded-md px-4 py-2 text-sm`}
                    data-color={c}
                    onClick={updateFilters}
                  >
                    {color === c ? <FaCheck /> : null}
                  </button>
                )
              )}
            </div>
          </div>
          {/* end of colors */}
          {/* price */}
          <div className="form-control mb-4">
            <h5 className="mb-2">Price</h5>
            <p className="price">{price}</p>
            <input
              type="range"
              name="price"
              onChange={updateFilters}
              min={min_price}
              max={max_price}
              value={price}
              className="w-full"
            />
          </div>
          {/* end of price */}
          {/* shipping */}
          <div className="form-control mb-4">
            <label htmlFor="shipping" className="cursor-pointer">
              Free Shipping
            </label>
            <input
              type="checkbox"
              name="shipping"
              id="shipping"
              checked={shipping}
              onChange={updateFilters}
              className="ml-2 focus:ring focus:ring-blue-400"
            />
          </div>
          {/* end of  shipping */}
        </form>
        <Button
          variant="contained"
          size="small"
          color="error"
          onClick={clearFilters}
          className="block mx-auto"
        >
          Clear Filters
        </Button>
      </div>
    </div>
  );
}
