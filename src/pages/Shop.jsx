import React from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import ShopItemBlock from '../components/ShopItemBlock';
import PageMap from '../components/PageMap'

const sizeOptions = [
  { value: 'xl', label: 'XL' },
  { value: 'xxl', label: 'XXL' },
  { value: 'ms', label: 'MS' },
];
const SizeSelect = () => (
  <Select className="size-select" options={sizeOptions} placeholder="Size.." />
);
const colorOptions = [
  { value: 'xl', label: 'XL' },
  { value: 'xxl', label: 'XXL' },
  { value: 'ms', label: 'MS' },
];
const ColorSelect = () => (
  <Select className="color-select" options={colorOptions} placeholder="Color.." />
);
const priceOptions = [
  { value: 'xl', label: 'XL' },
  { value: 'xxl', label: 'XXL' },
  { value: 'ms', label: 'MS' },
];
const PriceSelect = () => (
  <Select className="price-select" options={priceOptions} placeholder="Price.." />
);
const sortOptions = [
  { value: '0', label: 'Relevance' },
  { value: '1', label: 'Name (A - Z)' },
  { value: '2', label: 'Name (Z - A)' },
  { value: '3', label: 'Price (Low &gt; High)' },
  { value: '4', label: 'Rating (Lowest)' },
];
const SortSelect = () => (
  <Select className="color-select" options={sortOptions} placeholder="Sort By.." />
);
const categoryOptions = [
  { value: '0', label: 'Parks' },
  { value: '1', label: 'Fur coats' },
  { value: '2', label: 'Coat' },
  { value: '3', label: 'Jackets' },
  { value: '4', label: 'Parks' },
  { value: '5', label: 'Fur coats' },
  { value: '6', label: 'Coat' },
  { value: '7', label: 'Jackets' },
  { value: '8', label: 'Parks' },
];
const CategorySelect = () => (
  <Select className="category-select" options={categoryOptions} placeholder="Category.." />
);


const Shop = () => {
  return (
    <div className="show-wrapper">
      
      <div className="container">
        <div className="lg-version ">
          <PageMap title={"Shop"}/>
          <div className="row">
            <div className="content d-flex">
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
              <div className="gallary">
                <div className="filter ">
                  <div className="size d-flex">
                    {SizeSelect()}
                    {ColorSelect()}
                    {PriceSelect()}
                    {SortSelect()}
                  </div>
                </div>
                <div className="shop-block">
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
          </div>
        </div>
        <div className="mobile-version">
          <PageMap title={"Shop"}/>
          <div className="mob-category">
            {CategorySelect()}
          </div>
          <div className="mob-filter mt-5 d-flex">
            {SizeSelect()}
            {ColorSelect()}
            {PriceSelect()}
            {SortSelect()}
          </div>
          <div className="mob-content d-flex flex-wrap justify-content-between">
            <ShopItemBlock/>
            <ShopItemBlock/>
            <ShopItemBlock/>
            <ShopItemBlock/>
            <ShopItemBlock/>
            <ShopItemBlock/>
            <ShopItemBlock/>
            <ShopItemBlock/>
            <ShopItemBlock/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
