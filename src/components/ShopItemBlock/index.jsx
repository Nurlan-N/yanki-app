import React from 'react';
import imageUrl from '../../assets/img/categoryimg/1.png';
import styles from './ShopItem.module.scss';
import wishlistIcon from '../../assets/img/icon/productWishlist.png'

console.log(styles);
const index = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.shop_block}>
        <a href="/shop/8">
          <img className="image" src={imageUrl} alt="Pizza" />
          <h4 className={styles.title}>Синее пальто</h4>
          <h5 className={styles.price}>2900$</h5>
          <button className={styles.wishlist}><img src={wishlistIcon} alt="" /></button>
        </a>
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
