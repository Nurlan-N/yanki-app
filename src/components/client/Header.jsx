import React, { useEffect, useState } from 'react';
import logo_gold from '../../assets/img/icon/logo_gold.png';
import Toast from 'react-bootstrap/Toast';
import profile from '../../assets/img/icon/profile_gold.png';
import wishlist from '../../assets/img/icon/wishlist_gold.png';
import basket from '../../assets/img/icon/basket_gold.png';
import SearchBlock from './SearchBlock';
import { BiMenuAltLeft } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useGetUserDetailsQuery } from '../../redux/function/authService';

const Header = ({ onClickCart, onClickSignIn, cartDisplay }) => {
  const { userToken } = useSelector((state) => state.auth);
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (userToken) {
      setShow(true);
    }
  }, [userToken, dispatch]);

  const { data } = useGetUserDetailsQuery('userDetails', {
    pollingInterval: 900000,
  });

  return (
    <header className={cartDisplay ? 'd-none' : ''}>
      <div className="test">
        {data && (
          <Toast
            className="toaster"
            onClose={() => setShow(false)}
            show={show}
            delay={3000}
            autohide>
            <Toast.Header>
              <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
              <strong className="me-auto">YANKI</strong>
              <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body>
              Hello, {data !== undefined ? data.name + '  ' + data.surname : ''}
            </Toast.Body>
          </Toast>
        )}
      </div>
      <div className="nav_bar col-lg-12 col-md-12">
        <div className="container">
          <div className="row">
            <div className="pages col-lg-4">
              <div className="mini_menu col-lg-4 col-md-2 col-1">
                <BiMenuAltLeft onClick={onClickCart} />
              </div>
              <div className="page col-lg-8 col-md-10 ">
                <Link to="/">NEW</Link>
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
              <SearchBlock />
              {userToken !== null ? (
                <>
                  <Link to="/myAccount">
                    <img src={profile} alt="profile" />
                  </Link>
                  <Link to="/wishlist">
                    <img src={wishlist} alt="wishlist" />
                  </Link>
                  <Link to="/cart">
                    <img src={basket} alt="basket" />
                  </Link>
                </>
              ) : (
                <>
                  <Link to="#">
                    <img onClick={onClickSignIn} src={profile} alt="profile" />
                  </Link>
                  <Link to="/#">
                    <img onClick={onClickSignIn} src={wishlist} alt="wishlist" />
                  </Link>
                  <Link to="#">
                    <img onClick={onClickSignIn} src={basket} alt="basket" />
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
