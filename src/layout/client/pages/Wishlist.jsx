import React, { useState } from 'react';
import PageMap from '../../../components/client/PageMap';
import ShopItemBlock from '../../../components/client/ShopItemBlock';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchWishlist } from '../../../redux/slices/productSlice';
import axios from 'axios';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const Wishlist = () => {
  const { wishlist } = useSelector((state) => state.product);
  const [wishlistState, setWishlistState] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchWishlist());
    setWishlistState(false);
  }, [wishlistState]);
  const AddToFavorite = async (item) => {
    try {
      const token = localStorage.getItem('userToken');
      if (wishlist.find((pr) => Number(pr.id) === Number(item.id))) {
        const { data } = await axios.delete(
          `https://localhost:44389/api/wishlist/delete/${item.id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
      } else {
        const { data } = await axios.post(
          `https://localhost:44389/api/wishlist/add?id=${item.id}`,
          null,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
      }
      setWishlistState(true);
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div className="wishlist_wrapper">
      <div className="container">
        <PageMap title={'Wishlist'} />
        <div className="wishlist_block">
          <TransitionGroup className="items d-flex">
            {wishlist &&
              wishlist.map((item, index) => (
                <CSSTransition key={item ? item.id : index} timeout={300} classNames="item">
                  <ShopItemBlock
                    onFavorite={(item) => AddToFavorite(item)}
                    wishlist={wishlist}
                    {...item}
                  />
                </CSSTransition>
              ))}
          </TransitionGroup>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
