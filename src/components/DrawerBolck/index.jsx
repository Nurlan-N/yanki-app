import React from 'react';
import { Link } from 'react-router-dom';
import styles from './DrawerBlock.module.scss';
import close_1 from '../../assets/img/icon/c-1.png';
import close_2 from '../../assets/img/icon/c-2.png';
import logo from '../../assets/img/icon/logo_white.png';
import wishlist from '../../assets/img/icon/wishlist.png';
import basket from '../../assets/img/icon/basket.png';

const index = ({ onClose, cartDisplay }) => {
  return (
    <div
      className={styles.drawer}
      style={
        cartDisplay
          ? { visibility: 'visible', opacity: '1' }
          : { visibility: 'hidden', opacity: '0' }
      }>
      <div
        className={styles.drawer_content}
        style={cartDisplay ? { left: '78%' } : { left: '100%' }}>
        <div onClick={onClose} className={styles.header}>
          <div className={styles.close}>
            <img src={close_1} width={34} height={4} className={styles.c_1} alt="close" />
            <img src={close_2} width={34} height={4} className={styles.c_2} alt="close" />
          </div>
          <div className={styles.logo}>
            <img height={20} width={70} src={logo} alt="Logo" />
          </div>
          <div className={styles.wishlist}>
            <Link onClick={onClose}><img width={20} height={20} src={wishlist} alt="Wishlist" /></Link>
          </div>
          <div className={styles.basket}>
            <Link onClick={onClose}><img width={20} height={20} src={basket} alt="Cart" /></Link>
          </div>

        </div>
        <div className={styles.menu_Item}>
          <Link to="/" onClick={onClose}>Home</Link>
        </div>
        <div className={styles.menu_Item}>
          <Link to="/my-account" onClick={onClose}>My Acoount</Link>
        </div>
        <div className={styles.menu_Item} >
          <Link to="/new" onClick={onClose}>New</Link>
        </div>
        <div className={styles.menu_Item}>
          <Link to="/shop" onClick={onClose}>Shop</Link>
        </div>
        <div className={styles.menu_Item}>
          <Link to="/about" onClick={onClose}>About</Link>
        </div>
        <div className={styles.menu_Item}>
          <Link to="/contact" onClick={onClose}>Contact</Link>
        </div>
        <div className={styles.footer}>
          <p>+(994) 055 582 86 99</p>
          <p>Nazarov.Nurlan@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default index;
