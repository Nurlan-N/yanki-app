import React from 'react';
import imageUrl from '../../assets/img/categoryimg/1.png';
import styles from './ShopItem.module.scss';
import wishlistIcon from '../../assets/img/icon/productWishlist.png'
import { Link } from 'react-router-dom';


const index = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.shop_block}>
        <Link onClick={() =>console.log("id")} to="/shop/id">
          <img className="image" src={imageUrl} alt="Item" />
          <h4 className={styles.title}>Синее пальто</h4>
          <h5 className={styles.price}>2900$</h5>
        </Link>
        <button onClick={() => console.log("wishlist")} className={styles.wishlist}><img src={wishlistIcon} alt="" /></button>
        <div className="shop-block__bottom">
          <div className={styles.size}>
            <p>xxs</p>
            <p>xs</p>
            <p>xl</p>
          </div>
          <div className={styles.color}>
              <button className={styles.c1}></button>
              <button className={styles.c2}></button>
              <button className={styles.c3}></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
