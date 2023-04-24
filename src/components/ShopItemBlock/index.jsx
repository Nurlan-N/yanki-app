import React, { useState } from 'react';
import styles from './ShopItem.module.scss';
import { Link } from 'react-router-dom';
import { setProductId } from '../../redux/slices/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { useEffect } from 'react';


const ShopItem = ({
  id,
  title,
  price,
  image,
  onFavorite,
  favorited = false,
  orderCheck = false,
}) => {
  const dispatch = useDispatch();
  const [addToFavorite, setAddFavorite] = useState(favorited);
  const { wishlist } = useSelector((state) => state.product);
  const addFavoriteHandler = () => {
    setAddFavorite(!addToFavorite);
    onFavorite({ id, title, price, image });
  };
  const productIdHandler = async (e) => {
    dispatch(setProductId(e));
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
              addToFavorite || wishlist.some((item) => item.id === id)
                ? { background: '#CCA88A' }
                : { background: '#e0bea2' }
            }>
            {addToFavorite || wishlist.some((item) => item.id === id) ? (
              <AiFillHeart className={styles.heart} />
            ) : (
              <AiOutlineHeart className={styles.heart} />
            )}
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
