import React from "react";
import { UseFilterContext } from "../context/filter_context";
import { getUniqueValues } from "../utils/formatPrice";

const Filters = () => {
  const { all_products } = UseFilterContext();
  const categories = getUniqueValues(all_products, "category");
  const companies = getUniqueValues(all_products, "company");
  const colors = getUniqueValues(all_products, "colors");

  return (
    <div>
      <form action="" onSubmit={(e) => e.preventDefault()}>
        <div>
          <input
            className="border border-1 rounded-md p-1 bg-gray-100 mb-2"
            type="text"
            name="text"
            placeholder="search"
          />
        </div>
        <div className="form-control mb-3">
          <h5 className="font-bold">Category</h5>
          <div>
            {categories.map((c, index) => {
              return (
                <button
                  key={index}
                  className="py-1 px-3 rounded-md bg-gray-200 text-gray-800 mr-2 mb-2"
                >
                  {c}
                </button>
              );
            })}
          </div>
        </div>
        <div className="form-control">
          <h5 className="font-bold">Company</h5>
          <div>
            <select className="border border-1 rounded-md p-1 bg-gray-100">
              {companies.map((c, index) => (
                <option key={index}>{c}</option>
              ))}
            </select>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Filters;
