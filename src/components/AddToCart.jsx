import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { FaCheck } from "react-icons/fa";
import AmountButtons from "./AmountButtons";
import { useCartContext } from "../context/cart_context";
const AddToCart = ({ product }) => {
  const { addToCart } = useCartContext();
  const { id, stock, colors } = product;
  const [mainColor, setMainColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);
  const decrease = () => {
    setAmount((dec) => dec - 1);
    if (amount <= 1) {
      setAmount(1);
    }
  };
  const increase = () => {
    setAmount((inc) => inc + 1);
    if (amount >= stock) {
      setAmount(amount);
    }
  };
  return (
    <div>
      <div className="colors flex ">
        <span className="capitalize font-bold mr-3">colors:</span>
        {colors.map((color, index) => (
          <button
            key={index}
            style={{ backgroundColor: color }}
            className={`${
              mainColor === color ? "active color-btn" : "color-btn"
            }`}
            onClick={() => setMainColor(color)}
          >
            {mainColor === color && <FaCheck />}{" "}
          </button>
        ))}
      </div>
      <div className="btn-container my-5">
        <AmountButtons
          increase={increase}
          decrease={decrease}
          amount={amount}
        />
        <Link
          to="/cart"
          onClick={() => addToCart(id, mainColor, amount, product)}
        >
          <Button
            variant="contained"
            size="medium"
            style={{ backgroundColor: "#2B7FB6", marginTop: "1rem" }}
          >
            Add to Cart
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default AddToCart;
