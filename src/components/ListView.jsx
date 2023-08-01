import React from "react";
import { Link } from "react-router-dom";
import { formatPrice } from "../utils/formatPrice";
const ListView = ({ products }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {products.map((product) => {
        const { id, image, name, price, description } = product;
        return (
          <article
            key={id}
            className="flex bg-white rounded-lg overflow-hidden shadow-md mb-5 transition-transform transform hover:scale-105"
          >
            <div className="flex-shrink-0">
              <img
                src={image}
                alt={name}
                className="w-32 h-40 object-cover rounded-l-lg"
              />
            </div>
            <div className="p-4 flex flex-col flex-1">
              <div>
                <h4 className="text-xl font-semibold">{name}</h4>
                <h5 className="text-lg font-medium text-gray-700 mt-1">
                  {formatPrice(price)}
                </h5>
              </div>
              <p className="mt-2 text-gray-600 flex-1">
                {description.substring(0, 150)}...
              </p>
              <div className="mt-4">
                <Link
                  to={`/products/${id}`}
                  className="inline-block bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition-colors duration-300"
                >
                  Details
                </Link>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default ListView;
