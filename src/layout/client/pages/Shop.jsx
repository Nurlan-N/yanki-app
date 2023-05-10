import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Select from 'react-select';
import ShopItemBlock from '../../../components/client/ShopItemBlock';
import Pagination from '../../../components/client/Pagination';
import PageMap from '../../../components/client/PageMap';
import axios from 'axios';
import qs from 'qs';
import { useSelector, useDispatch } from 'react-redux';
import { setCategoryId, setCurrentPage, setFilters } from '../../../redux/slices/filterSlice';
import { useRef } from 'react';
import { fetchProducts } from '../../../redux/slices/productSlice';
import { useGetUserWishlistQuery } from '../../../redux/function/authService';

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

const Shop = () => {
  const { wishlist } = useSelector((state) => state.product);
  const [sort, setSort] = useState(0);
  const isSearch = useRef(false);
  const isMounted = useRef(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { categoryId, currentPage } = useSelector((state) => state.filter);
  const { products, status, pageCount } = useSelector((state) => state.product);

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
    dispatch(setCurrentPage(1));
  };

  const [categoryData, setCategoryData] = useState([]);

  const onChangePage = (e) => {
    dispatch(setCurrentPage(e.selected + 1));
  };

  const fetchCategories = async () => {
    try {
      const { data } = await axios.get('https://localhost:44389/api/category');
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
        fetchProducts(params),
      );
      isSearch.current = true;
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!isSearch.current) {
      fetchCategories();
      getProducts();
    }
    isSearch.current = false;
  }, [categoryId, currentPage, sort]);

  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        categoryId,
        currentPage,
        sort,
      });
      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [categoryId, currentPage, sort]);

  const getProducts = () => {
    dispatch(
      fetchProducts({
        currentPage,
        categoryId,
        sort,
      }),
    );
  };
  const CategorySelect = () => (
    <Select className="category-select" options={categoryOptions} placeholder="Category.." />
  );
  const AddToFavorite = async (item) => {
    try {
      const token = localStorage.getItem('userToken');
      if (wishlist && wishlist.find((pr) => Number(pr.id) === Number(item.id))) {
        await axios.delete(`https://localhost:44389/api/wishlist/delete/${item.id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      } else {
        console.log('else');
        await axios.post(`https://localhost:44389/api/wishlist/add?id=${item.id}`, null, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      }
    } catch (error) {
      alert('Favoritler yuklenmedi');
    }
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
                  <div>
                    <select
                      onChange={(e) => setSort(e.target.value)}
                      className="sort_select"
                      id="Sort">
                      <option  value="0">
                        Relevance
                      </option>
                      <option value="1">Name (A - Z)</option>
                      <option value="2">Name (Z - A)</option>
                      <option value="3">Price (Low &amp;gt; High)</option>
                      <option value="4">Rating (Lowest)</option>
                    </select>
                  </div>
                </div>
                <div className="shop-block">
                  <div className="items d-flex ">
                    {(status == 'loading' ? [...Array(12)] : products).map((item, index) => (
                      <ShopItemBlock
                        key={item ? item.id : index}
                        onFavorite={(item) => AddToFavorite(item)}
                        wishlist={wishlist}
                        loading={status}
                        {...item}
                      />
                    ))}
                    <div className="mob-content d-flex flex-wrap justify-content-between"></div>
                  </div>
                </div>
                <Pagination count={Math.ceil(pageCount / 8)} onChangePage={onChangePage} />
              </div>
            </div>
          </div>
        </div>
        <div className="mobile-version">
          <PageMap title={'Shop'} />
          <div className="mob-category">{CategorySelect()}</div>
          <div className="mob-filter mt-5 d-flex"></div>

          {(status == 'loading' ? [...Array(12)] : products).map((item, index) => (
            <ShopItemBlock
              key={item ? item.id : index}
              onFavorite={(item) => AddToFavorite(item)}
              wishlist={wishlist}
              loading={status}
              {...item}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
