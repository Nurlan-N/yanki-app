import React from 'react';
import logo_gold from '../assets/img/icon/logo_gold.png';
import search from '../assets/img/icon/search_black.png';
import profile from '../assets/img/icon/profile_gold.png';
import wishlist from '../assets/img/icon/wishlist_gold.png';
import basket from '../assets/img/icon/basket_gold.png';
import { BiMenuAltLeft } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Header = ({ onClickCart }) => {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="nav_bar col-lg-12 col-md-12">
            <div className="pages col-lg-4">
              <div className="mini_menu col-lg-4 col-md-2 col-1">
                <BiMenuAltLeft onClick={onClickCart} />
              </div>
              <div className="page col-lg-8 col-md-10 ">
                <Link to="/new">NEW</Link>
                <Link to="/shop">SHOP</Link>
                <Link to="/about">ABOUT</Link>
              </div>
            </div>
            <div className="logo col-lg-4 col-md-10">
              <Link to="/">
                <img src={logo_gold} alt="logo" />
              </Link>
            </div>
            <div className="menu col-lg-4 col-md-10">
              <a href="">
                <img src={search} alt="vector" />
              </a>
              <a href="">
                <img src={profile} alt="profile" />
              </a>
              <Link to="/wishlist">
                <img src={wishlist} alt="wishlist" />
              </Link>
              <Link to="/cart">
                <img src={basket} alt="basket" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
