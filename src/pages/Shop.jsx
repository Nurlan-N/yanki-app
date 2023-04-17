import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import ShopItemBlock from '../components/ShopItemBlock';
import Pagination from '../components/Pogination';
import PageMap from '../components/PageMap';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { setCategoryId, setCurrentPage } from '../redux/slices/filterSlice';

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
  const dispatch = useDispatch();
  const { categoryId, currentPage } = useSelector((state) => state.filter);

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
    dispatch(setCurrentPage(1));
  };

  const [product, setProduct] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [itemCount, setItemCount] = useState(0);



  const onChangePage = (e) => {
    dispatch(setCurrentPage(e.selected + 1));
  };


  useEffect(() => {
    async function fetchData() {
      try {
        const {data} = await axios.get(
          `https://localhost:44389/api/product?page=${currentPage}&limit=8&categoryId=${categoryId}`,
        );
        setProduct(data.product);
        setItemCount(Math.ceil(data.count / 8));
        
      } catch (error) {
        alert('Product data sehv');
      }
      try {
        const { data } = await axios.get('https://localhost:44389/api/category');
        setCategoryData(data);
      } catch (error) {
        alert('Category Datada sehv');
      }
    }
    fetchData();
  }, [categoryId, currentPage]);
  return (
    <div className="show-wrapper">
      <div className="container">
        <div className="lg-version ">
          <PageMap title={'Shop'} />
          <div className="row">
            <div className="content d-flex">
              <div className="category-list">
                <h4>Category</h4>
                {categoryData &&
                  categoryData.map((obj) => (
                    <Link key={obj.id} onClick={() => onChangeCategory(obj.id)} to="#">
                      {obj.name}
                    </Link>
                  ))}
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
                    <ShopItemBlock  product={product} />
                    <div className="mob-content d-flex flex-wrap justify-content-between"></div>
                  </div>
                </div>
                <Pagination count={itemCount} onChangePage={onChangePage} />
              </div>
            </div>
          </div>
          <div className="mobile-version">
            <PageMap title={'Shop'} />
            <div className="mob-category">{CategorySelect()}</div>
            <div className="mob-filter mt-5 d-flex">
              {SizeSelect()}
              {ColorSelect()}
              {PriceSelect()}
              {SortSelect()}
            </div>

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

export default Shop;
