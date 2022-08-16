import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutuser } from "../../store/auth/auth.actions";
import {Link } from "react-router-dom"

const Navbar = () => {
  const { loading, data, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const item = useSelector((state)=>state.cart)

  const logout = () => {
    dispatch(logoutuser());
  };
  return (
    <div
      data-cy="navbar"
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "20px",
      }}
    >
      <div>
        {" "}
      <Link to={'/'}>  logo</Link>
      
        {/* TODO: Use Link instead of anchor tag. */}
        <a data-cy="navbar-home-link"></a>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",

          width: "120px",
        }}
      >
        <div data-cy="navbar-cart-items-count"> Cart : ({item.data.length}) </div>
        <button data-cy="navbar-login-logout-button" onClick={logout}>
          {data.isAuthenticated ? "logout" : "login"}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
