import React, { useState, useCallback } from 'react';
import styles from './SearchBlock.module.scss';
import search from '../../../assets/img/icon/Vector.png';
import debounce from 'lodash';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const SearchBlock = () => {
  const [display, setDisplay] = useState(false);
  const dispatch = useDispatch();
  const [products, setProducts] = useState(null);
  const [searchError, setSearchError] = useState(null);
  const displayHandler = () => {
    setDisplay(!display);
  };

  const onChangeInput = async (e) => {
    try {
      if (e.length > 0) {
        const { data } = await axios.get(
          `https://217.76.63.20:44389/api/Product/search?search=${e}`,
        );
        setProducts(data);
      } else {
        setProducts(null);
      }
    } catch (error) {
      setSearchError(error);
    }
  };
  const productIdHandler = async (id, categoryId) => {
    setDisplay(false);
    localStorage.setItem('productId', id);
    dispatch({
      type: 'SET_PRODUCT_ID',
      payload: id,
    });
    localStorage.setItem('categoryId', categoryId);
    dispatch({
      type: 'SET_CATRGORY_ID',
      payload: id,
    });
  };
  return (
    <div className={styles.root}>
      <div className={styles.searchTop}>
        <img
          style={display ? { width: '15px', height: '15px' } : { width: '25px' }}
          onClick={displayHandler}
          className={styles.icon}
          src={search}
          alt="search"
        />
        <input
          onChange={(e) => onChangeInput(e.target.value)}
          style={display ? { width: '100%', opacity: '1' } : { width: '0%', opacity: '0' }}
          className={styles.input}
          type="text"
          placeholder="Search..."
        />
      </div>
      <div style={display ? {} : { display: 'none' }} className={styles.products}>
        {products &&
          products.map((item) => {
            return (
              <div key={item.id} className={styles.item}>
                <img width={100} src={item.image} alt="" />
                <div className={styles.text}>
                  <Link onClick={() => productIdHandler(item.id, item.categoryId)} to={`/detail`}>
                    {item.title}
                  </Link>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default SearchBlock;
