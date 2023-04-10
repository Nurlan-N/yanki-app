import React from 'react';
import righRow from '../assets/img/icon/right.png';
import ShopItemBlock from '../components/ShopItemBlock';

const Wishlist = () => {
  return (
    <div className="wishlist_wrapper">
      <div className="container">
        <div className="map d-flex ">
          <p>Home</p>
          <img src={righRow} alt="" />
          <p>Shop</p>
        </div>
        <div className="wishlist_block">
          <div className="items d-flex justify-content-between">
            <ShopItemBlock />
            <ShopItemBlock />
            <ShopItemBlock />
            <ShopItemBlock />
            <ShopItemBlock />
            <ShopItemBlock />
            <ShopItemBlock />
            <ShopItemBlock />
            <ShopItemBlock />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
