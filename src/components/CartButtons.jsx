import { useState, useRef } from "react";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import { useUserContext } from "../context/user_context";
import { useProductsContext } from "../context/products_context";
import { useCartContext } from "../context/cart_context";

const CartButtons = () => {
  const { total_items } = useCartContext();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { loginWithRedirect, myUser, logout } = useUserContext();
  const { closeSidebar } = useProductsContext();
  const dropdownRef = useRef(null);

  const handleLogoutClick = (e) => {
    e.stopPropagation();
    localStorage.removeItem("user");
    setIsDropdownOpen(false);
    logout({ returnTo: window.location.origin });
  };

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  const handleButtonClick = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <Wrapper className="cart-btn-wrapper">
      <div>
        {myUser ? (
          <div
            className="profile-dropdown"
            ref={dropdownRef}
            onClick={handleButtonClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="avatar">
              {/* Replace this with your avatar image */}
              <img src={myUser?.picture} alt="Avatar" />
            </div>
            {isDropdownOpen && (
              <div className="dropdown-content">
                {myUser && <div className="username"> {myUser.name}</div>}
                {myUser ? (
                  <Button
                    className="logout"
                    // variant="outlined"
                    size="small"
                    onClick={handleLogoutClick}
                    component={Link}
                    to={window.location.pathname}
                  >
                    Logout
                    <LogoutIcon />
                  </Button>
                ) : (
                  <Button
                    className="logout"
                    variant="outlined"
                    onClick={loginWithRedirect}
                    component={Link}
                    to={window.location.pathname}
                  >
                    Login
                    <LoginIcon />
                  </Button>
                )}
              </div>
            )}
          </div>
        ) : (
          <Button
            size="small"
            className="logout"
            onClick={loginWithRedirect}
            to={window.location.pathname}
          >
            login
            <LoginIcon />
          </Button>
        )}
      </div>
      <div className="block float-right">
        <Link
          className="cart-btn block float-right "
          to="/cart"
          onClick={closeSidebar}
        >
          <span className="cart-container">
            <ShoppingCartIcon color="action" style={{ fontSize: 30 }} />
            <Badge
              className="cart-value"
              badgeContent={total_items}
              color="primary"
            />
          </span>
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: space-between;
  width: 130px;

  /* General styles */
  body {
    font-family: Arial, sans-serif;
  }

  /* CartButtons component styles */
  .cart-btn-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    width: 120px;
  }

  .cart-btn {
    color: var(--clr-grey-1);
    letter-spacing: var(--spacing);
    color: var(--clr-grey-1);
    display: flex;
    /* align-items: center; */
  }

  .cart-container {
    font-size: 1.9rem;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    position: relative;
  }

  .cart-container svg {
    margin-left: -5px;
  }
  .cart-value {
    position: absolute;
    top: 8px;
    right: 8px;
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.75rem;
    color: var(--clr-white);
    padding: 12px;
  }
  /* Profile Dropdown styles */
  .profile-dropdown {
    position: relative;
    display: inline-block;
    cursor: pointer;
  }

  .profile-dropdown .avatar img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    transition: transform 0.2s ease-in-out;
  }

  .profile-dropdown .avatar img:hover {
    transform: scale(1.1);
  }

  .dropdown-content {
    position: absolute;
    bottom: -210%; /* Position the dropdown at the bottom */
    left: 50%; /* Center the dropdown horizontally */
    background-color: #f9f9f9;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    padding: 10px;
    display: flex;
    flex-direction: column;
    min-width: 160px; /* Decreased the width, adjust as needed */
    opacity: 0;
    pointer-events: none;
    transform: translateX(-50%); /* Center the dropdown horizontally */
    transition: opacity 0.2s ease-in-out, transform 0.2s ease-in-out;
    text-align: center; /* Center the dropdown content */
  }

  .profile-dropdown:hover .dropdown-content {
    opacity: 1;
    pointer-events: auto;
    transform: translateX(-50%); /* Center the dropdown horizontally */
  }

  .username {
    margin-bottom: 8px;
    font-weight: bold;
    position: relative;
    display: inline-block;
  }

  .username::after {
    content: "";
    position: absolute;
    left: 50%; /* Move the underline to the middle of the username */
    bottom: -5px;
    width: 100%; /* Change the width of the underline as needed */
    height: 1px;
    background-color: #007bff; /* Replace this with the desired underline color */
    transform: translateX(-50%); /* Center the underline */
  }

  .dashboard,
  .logout {
    padding: 4px;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
  }

  .dashboard:hover,
  .logout:hover {
    background-color: #ddd;
    border-radius: 4px;
  }
`;

export default CartButtons;
