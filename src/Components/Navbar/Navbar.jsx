import React, { useContext, useState } from 'react';
import './Navbar.css';
import logo from '../Asset/logo.png';
import cart_icon from '../Asset/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/Shopcontext';

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <p>BUYZAAR</p>
      </div>

      <ul className="nav-menu">
        <li onClick={() => setMenu("Products")}>
          <Link style={{ textDecoration: 'none' }} to='/'>Products</Link>
          {menu === "shop" && <hr />}
        </li>
        <li onClick={() => setMenu("Gents")}>
          <Link style={{ textDecoration: 'none' }} to='/mens'>Gents</Link>
          {menu === "Gents" && <hr />}
        </li>
        <li onClick={() => setMenu("Ladies")}>
          <Link style={{ textDecoration: 'none' }} to='/womens'>Ladies</Link>
          {menu === "Ladies" && <hr />}
        </li>
        <li onClick={() => setMenu("Children")}>
          <Link style={{ textDecoration: 'none' }} to='/kids'>Children</Link>
          {menu === "Childern" && <hr />}
        </li>
      </ul>

      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'>
          <img src={cart_icon} alt="cart" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;

