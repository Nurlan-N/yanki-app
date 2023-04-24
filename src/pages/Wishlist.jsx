import React from 'react';
import PageMap from '../components/PageMap';
import ShopItemBlock from '../components/ShopItemBlock'
import { useGetUserWishlistQuery } from '../redux/function/authService';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fechWishlist } from '../redux/slices/productSlice';

const Wishlist = () => {
  const { wishlist } = useSelector((state) => state.product);
  const dispach = useDispatch();
  useEffect(() =>{
    dispach(
      fechWishlist()
    )
  },[])
  
  return (
    <div className="wishlist_wrapper">
      <div className="container">
        <PageMap title={'Wishlist'} />
        <div className="wishlist_block">
          <div className="items d-flex">
            {wishlist &&
              wishlist.map((item, index) => (
                <ShopItemBlock
                  key={item ? item.id : index}
                  {...item}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
