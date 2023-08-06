import { useState } from "react";
import { useCartContext } from "../context/cart_context";
import { formatPrice } from "../utils/formatPrice";
import { useUserContext } from "../context/user_context";
import { Link } from "react-router-dom";
const CartTotals = () => {
  const { myUser, loginWithRedirect } = useUserContext();
  const { total_amount, shipping_fee } = useCartContext();
  const [promoCode, setPromoCode] = useState("");
  const [expPromo, setExpPromo] = useState("");

  const handlePromoCodeChange = (e) => {
    setPromoCode(e.target.value);
  };

  const applyPromoCode = () => {
    // Add your promo code logic here
    setExpPromo("promocode expired");
  };

  return (
    <>
      <div className="w-full ml-auto mt-8 p-4 border rounded-lg shadow-md bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-300 max-w-sm">
        <div className="p-2 bg-yellow-600 rounded-t-lg text-white">
          <h3 className="text-2xl font-bold">FurniMart Shopping</h3>
        </div>
        <div className="p-4">
          <h5 className="text-xl font-bold mb-2 text-yellow-900">
            Subtotal:{" "}
            <span className="text-yellow-900">{formatPrice(total_amount)}</span>
          </h5>
          <p className="mb-4 text-yellow-800">
            Shipping Fee: {formatPrice(shipping_fee)}
          </p>
          <hr className="border-t my-4 border-yellow-500" />
          <h4 className="text-2xl font-bold">
            Order Total:{" "}
            <span className="text-yellow-900">
              {formatPrice(total_amount + shipping_fee)}
            </span>
          </h4>

          {/* Responsive Promo Code Section */}
          <div className=" flex flex-col md:flex-row md:items-center">
            <div className="flex mb-[-10px] mt-5 flex-col md:flex-row md:items-center">
              <input
                type="text"
                id="promoCode"
                placeholder="Enter PromoCode"
                value={promoCode}
                onChange={handlePromoCodeChange}
                className="border border-yellow-500 active:border-yellow-600 outline-none px-2 py-1 mb-2 md:mr-2 md:mb-0 rounded"
              />
              <button
                onClick={applyPromoCode}
                className="bg-yellow-600 text-white px-4 py-1 rounded"
              >
                Apply
              </button>
            </div>
          </div>
          {/* End Promo Code Section */}

          {/* Promo Code Expiration Message */}
          <p className="text-red-500 text-sm mt-4">{expPromo}</p>
          {/* End Promo Code Expiration Message */}
        </div>
      </div>
      <div className="block float-right mt-2 bg-yellow-800 w-full rounded-md  text-center text-white max-w-sm">
        {myUser ? (
          <button className="w-full py-2 max-w-sm">
            {" "}
            <Link to="/checkout">proceed to checkout</Link>
          </button>
        ) : (
          <button className="w-full py-2 max-w-sm" onClick={loginWithRedirect}>
            login
          </button>
        )}
      </div>
    </>
  );
};

export default CartTotals;
