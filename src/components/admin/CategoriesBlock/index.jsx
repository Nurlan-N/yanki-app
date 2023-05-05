import React, { useState } from 'react';
import Pagination from '../../client/Pagination';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useEffect } from 'react';
import axios from 'axios';

const Categories = () => {
  const Swal = require('sweetalert2');
  const [dltCategory, setDltCategory] = useState(false);
  const [category, setCategory] = useState(JSON.parse(Cookies.get('category') || '[]'));

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get('https://localhost:44389/api/category');
        setCategory(data);
        Cookies.set('category', JSON.stringify(data));
      } catch (error) {
        alert('Datada sehv');
      }
    }
    fetchData();
    setDltCategory(false)
  }, [dltCategory]);
  const categoryIdHandler = (e) => {
    window.localStorage.setItem('categoryId', e);
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
        axios.delete(`https://localhost:44389/api/category?id=${id}`);
        setDltCategory(true);
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
      }
    });
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-2">
          <h1 className="h3 mb-4 text-gray-800">Category Page</h1>
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
                <th>№</th>
                <th>Name</th>
                <th>Image</th>
                <th>Created At</th>
                <th>Created By</th>
                <th>Updated At</th>
                <th>Settings</th>
              </tr>
            </thead>
            <tbody>
              {category &&
                category.map((item, index) => {
                  return (
                    <tr key={index} className="col-lg-12 align-center">
                      <td>{item.id}</td>
                      <td>
                        <img style={{ width: '100px' }} src={item.image} />{' '}
                      </td>
                      <td>{item.name}</td>
                      <td>{new Date(item.createdAt).toLocaleDateString('en-US')}</td>
                      <td>{item.createdBy}</td>
                      <td>{new Date(item.updatetAt).toLocaleDateString('en-US')}</td>
                      <td className="d-flex justify-content-around ">
                        <Link
                          className="btn btn-primary"
                          to="detail"
                          onClick={() => categoryIdHandler(item.id)}>
                          {' '}
                          Detail
                        </Link>
                        <Link
                          className="btn btn-warning"
                          to="update"
                          onClick={() => categoryIdHandler(item.id)}>
                          Update
                        </Link>
                        <Link className="btn btn-danger " to="#"
                        onClick={() => productDltHandler(item.id)}>Delete</Link>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
        <div className="col-lg-12">
          <Pagination count={Math.ceil(category.length / 8)} />
        </div>
      </div>
    </div>
  );
};

export default Categories;
