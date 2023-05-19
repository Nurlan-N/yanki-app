import React, { useEffect, useState } from 'react';
import PageMap from '../../../components/client/PageMap';
import ShopItemBlock from '../../../components/client/ShopItemBlock';
import axios from 'axios';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWishlist } from '../../../redux/slices/productSlice';

const Wishlist = () => {
  const [dltWishlist, setDltWishlist] = useState(false);
  const token = localStorage.getItem('userToken');
  const dispatch = useDispatch();
  const { wishlist } = useSelector((state) => state.product);
  useEffect(() => {
    if (token != null) {
      dispatch(fetchWishlist());
    }
  }, [dltWishlist, token]);

  const AddToFavorite = async (item) => {
    try {
      const token = localStorage.getItem('userToken');
      if (wishlist.find((pr) => Number(pr.id) === Number(item.id))) {
        setDltWishlist(true);
        await axios.delete(`https://localhost:44389/api/wishlist/delete/${item.id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      }
      setDltWishlist(false);
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
          <div
            style={wishlist.length > 0 ? { display: 'none' } : {}}
            className="mx-auto text-center mt-5">
            <h2>Wish List Is Empty</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
