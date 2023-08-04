import React from "react";
import { TbShoppingCartOff } from "react-icons/tb";
import StripeCheckout from "../components/StripeCheckout";
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";

const CheckOutPage = () => {
  const { cart } = useCartContext();

  return (
    <main className="min-h-screen flex justify-center items-center">
      <div className="text-center">
        {cart.length < 1 ? (
          <div>
            <h1 className="text-3xl font-bold mb-4">
              Your cart is empty
              <TbShoppingCartOff className="inline-block ml-2" />
            </h1>
            <Link to="/products">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Fill it
              </button>
            </Link>
          </div>
        ) : (
          <StripeCheckout />
        )}
      </div>
    </main>
  );
};

export default CheckOutPage;
