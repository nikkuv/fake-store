import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import '../App.css';

const Navbar = () => {
  const items = useSelector((state) => state.cart);
  
  return (
    <div className="navBarContainer">
      <div
      className="navBar"
    >
      <h3>Fake Store</h3>
      <div>
        <Link className="navLink" to="/">
          Home
        </Link>
        <Link className="navLink" to="/cart">
          Cart
        </Link>
        <span className="cartCount">items: {items.length}</span>
      </div>
    </div>
    </div>
  );
};

export default Navbar;