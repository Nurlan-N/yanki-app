import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Select from 'react-select';
import ShopItemBlock from '../components/ShopItemBlock';
import Pagination from '../components/Pogination';
import PageMap from '../components/PageMap';
import axios from 'axios';
import qs from 'qs';
import { useSelector, useDispatch } from 'react-redux';
import { setCategoryId, setCurrentPage, setFilters } from '../redux/slices/filterSlice';
import { useRef } from 'react';
import { fetchProduct, setPageCount } from '../redux/slices/productSlice';

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
  const isSearch = useRef(false);
  const isMounted = useRef(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { categoryId, currentPage } = useSelector((state) => state.filter);
  const { products, status, pageCount } = useSelector((state) => state.product);

  console.log(pageCount);
  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
    dispatch(setCurrentPage(1));
  };

  const [categoryData, setCategoryData] = useState([]);

  const onChangePage = (e) => {
    dispatch(setCurrentPage(e.selected + 1));
  };

  const fechCategories = async () => {
    try {
      const { data } = await axios.get('https://localhost:44389/api/category');
      //console.log(data);
      setCategoryData(data);
    } catch (error) {
      alert('Category Datada sehv');
    }
  };

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      dispatch(
        setFilters({
          ...params,
        }),
        fetchProduct(params),
      );
      isSearch.current = true;
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!isSearch.current) {
      //fechProducts();
      fechCategories();
      getProducts();
    }
    isSearch.current = false;
  }, [categoryId, currentPage]);

  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        categoryId,
        currentPage,
      });
      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [categoryId, currentPage]);

  const getProducts = () => {
    dispatch(
      fetchProduct({
        currentPage,
        categoryId,
      }),
    );
  };

  return (
    <div className="show-wrapper">
      <div className="container">
        <div className="lg-version ">
          <PageMap title={'Shop'} />
          <div className="row">
            <div className="content d-flex">
              <div className="category-list">
                <h4>Category</h4>
                <Link
                  onClick={() => onChangeCategory(0)}
                  style={{ color: 0 === categoryId ? '#E0BEA2' : '#252525' }}
                  to="#">
                  All Product
                </Link>
                {categoryData &&
                  categoryData.map((obj) => (
                    <Link
                      key={obj.id}
                      onClick={() => onChangeCategory(obj.id)}
                      style={{ color: categoryId === obj.id ? '#E0BEA2' : '#252525' }}
                      to="#">
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
                    <ShopItemBlock product={products.product} />
                    <div className="mob-content d-flex flex-wrap justify-content-between"></div>
                  </div>
                </div>
                <Pagination count={Math.ceil(pageCount / 8)} onChangePage={onChangePage} />
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
