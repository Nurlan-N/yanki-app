import React from 'react';
import imageUrl from '../../assets/img/categoryimg/1.png';
import styles from './ShopItem.module.scss';
import wishlistIcon from '../../assets/img/icon/productWishlist.png';
import { Link } from 'react-router-dom';

const ShopItem = ({ product = [] }) => {
  return (
    <>
      {product &&
        product.map((item) => (
          <div className={styles.wrapper} key={item.id}>
            <div className={styles.shop_block}>
              <Link onClick={() => console.log(item.id)} to={`/detail`}>
                <img className="image" src={item.image} alt="Item" />
                <h4 className={styles.title}>{item.title}</h4>
                <h5 className={styles.price}>{item.price}$</h5>
              </Link>
              <button onClick={() => console.log('wishlist')} className={styles.wishlist}>
                <img src={wishlistIcon} alt="" />
              </button>
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
        ))}
    </>
  );
};

export default ShopItem;
