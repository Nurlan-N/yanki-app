import React, { useState } from 'react';
import imageUrl from '../../assets/img/categoryimg/1.png';
import styles from './ShopItem.module.scss';
import wishlistIcon from '../../assets/img/icon/productWishlist.png';
import { Link } from 'react-router-dom';
import { setProductId } from '../../redux/slices/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineHeart } from 'react-icons/ai';
import axios from 'axios';

const ShopItem = ({
  id,
  title,
  price,
  image,
  onFavorite,
  onPlus,
  favorited = false,
  loading = false,
  orderCheck = false
}) => {
  const dispach = useDispatch();
  const [addToFavorite, setAddFavorite] = useState(favorited);

  const addFavoriteHandler = () => {
    setAddFavorite(!addToFavorite);
    onFavorite({ id, title, price, image });
  };
  const productIdHandler = async (e) => {
    dispach(setProductId(e));
  };

  return (
    <>
      <div className={styles.wrapper} key={id}>
        <div className={styles.shop_block}>
          <Link onClick={() => productIdHandler(id)} to={`/detail`}>
            <img className="image" src={image} alt="Item" />
            <h4 className={styles.title}>{title}</h4>
            <h5 className={styles.price}>{price}$</h5>
          </Link>
          <button
            onClick={addFavoriteHandler}
            className={styles.wishlist}
            style={
              addToFavorite ? { background: '#CCA88A' } : { background: '#e0bea2' }
            }>
            <AiOutlineHeart className={styles.heart} />
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
    </>
  );
};

export default ShopItem;
