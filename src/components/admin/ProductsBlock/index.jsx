import React, { useEffect, useRef } from 'react';
import Pagination from '../../client/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from '../../../redux/slices/filterSlice';
import qs from 'qs';
import { fetchProducts } from '../../../redux/slices/productSlice';
import { Link, useNavigate } from 'react-router-dom';

const Products = () => {
  const dispatch = useDispatch();
  const isMounted = useRef(false);
  const navigate = useNavigate();
  const { products, status, pageCount, wishlist } = useSelector((state) => state.product);
  const { categoryId, currentPage } = useSelector((state) => state.filter);
  const params = {
    currentPage: currentPage,
    categoryId: 0,
  };
  useEffect(() => {
    dispatch(fetchProducts(params));
  }, [currentPage]);
  const onChangePage = (e) => {
    dispatch(setCurrentPage(e.selected + 1));
  };
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
  const productIdHandler = async (id) => {
    localStorage.setItem('productId', id);
    dispatch({
      type: 'SET_PRODUCT_ID',
      payload: id,
    });
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-2">
          <h1 className="h3 mb-4 text-gray-800">Product Page</h1>
        </div>
        <div className="col-lg-2">
          <a className="btn btn-primary mb-4" href="/manage/product/create">
            Create
          </a>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <table className="table table-bordered table-striped ">
            <thead>
              <tr>
                <th>Id</th>
                <th>Image</th>
                <th>Name</th>
                <th>Created At</th>
                <th>Created By</th>
                <th>Settings</th>
              </tr>
            </thead>
            <tbody>
              {products &&
                products.map((item, index) => (
                  <tr key={index}>
                    <td>{item.id}</td>
                    <td>
                      <img style={{ width: '100px' }} src={item.image} />
                    </td>
                    <td>{item.title}</td>
                    <td>{new Date(item.createdAt).toLocaleDateString('en-US')}</td>
                    <td>{item.createdBy}</td>
                    <td className="d-flex justify-content-around">
                      <Link className="btn btn-primary" to="detail">
                        Detail
                      </Link>
                      <Link
                        onClick={() => productIdHandler(item.id)}
                        className="btn btn-warning"
                        to="update">
                        Update
                      </Link>
                      <Link className="btn btn-danger deleteBtn" to="delete">
                        Delete
                      </Link>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <div className="col-lg-12">
          <Pagination count={Math.ceil(pageCount / 8)} onChangePage={onChangePage} />
        </div>
      </div>
    </div>
  );
};

export default Products;
