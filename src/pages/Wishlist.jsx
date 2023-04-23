import React from 'react';
import PageMap from '../components/PageMap';
import ShopItemBlock from '../components/ShopItemBlock'
import { useGetUserWishlistQuery } from '../redux/function/authService';

const Wishlist = () => {
  const { data } = useGetUserWishlistQuery('userWishlist', {
    pollingInterval: 900000,
  });
  return (
    <div className="wishlist_wrapper">
      <div className="container">
        <PageMap title={'Wishlist'} />
        <div className="wishlist_block">
          <div className="items d-flex">
            {data &&
              data.map((item, index) => (
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
