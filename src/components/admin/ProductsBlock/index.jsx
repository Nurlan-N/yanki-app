import React, { useEffect, useRef } from 'react';
import Pagination from '../../client/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from '../../../redux/slices/filterSlice';
import qs from 'qs';
import { fetchProducts } from '../../../redux/slices/productSlice';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

const Products = () => {
  const Swal = require('sweetalert2');
  const dispatch = useDispatch();
  const isMounted = useRef(false);
  const navigate = useNavigate();
  const [deletePr, setDeletePr] = useState(false);
  const { products, status, pageCount, wishlist } = useSelector((state) => state.product);
  const { categoryId, currentPage, sort } = useSelector((state) => state.filter);
  const params = {
    currentPage: currentPage,
    categoryId: 0,
    sort: 0,
  };
  useEffect(() => {
    dispatch(fetchProducts(params));
  }, [currentPage, deletePr]);
  const onChangePage = (e) => {
    dispatch(setCurrentPage(e.selected + 1));
  };
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
  }, [categoryId, currentPage]);
  const productIdHandler = async (id) => {
    localStorage.setItem('productId', id);
    dispatch({
      type: 'SET_PRODUCT_ID',
      payload: id,
    });
  };
  const productDltHandler = (id) => {
    return Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://217.76.63.20:44389/api/Product?id=${id}`);
        setDeletePr(true);
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
      }
    });
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-2">
          <h1 className="h3 mb-4 text-gray-800">Product Page</h1>
        </div>
        <div className="col-lg-2">
          <Link className="btn btn-primary mb-4" to="create">
            Create
          </Link>
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
                      <Link
                        className="btn btn-primary"
                        to="detail"
                        onClick={() => productIdHandler(item.id)}>
                        Detail
                      </Link>
                      <Link
                        onClick={() => productIdHandler(item.id)}
                        className="btn btn-warning"
                        to="update">
                        Update
                      </Link>
                      <Link
                        className="btn btn-danger deleteBtn"
                        to="#"
                        onClick={() => productDltHandler(item.id)}>
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
