import React from 'react';
import righRow from '../assets/img/icon/right.png';
import { Link } from 'react-router-dom';

const Shop = () => {
  return (
    <div className="root">
      <div className="container">
        <div className="map d-flex ">
          <p>Home</p>
          <img src={righRow} alt="" />
          <p>Shop</p>
        </div>
        <div className="row">
          <div className="content">
          <div className="category-list">
            <h4>Category</h4>
            <Link to="/">Parks</Link>
            <Link to="/">Fur coats</Link>
            <Link to="/">Coat</Link>
            <Link to="/">Jackets</Link>
            <Link to="/">Fur coats</Link>
            <Link to="/">Parks</Link>
            <Link to="/">Coat</Link>
          </div>
          <div className="filter">
            <div className="size">
              <h5>SIZE</h5>
            </div>
          </div>
          <div className="items">test</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
