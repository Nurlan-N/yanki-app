import React, { useState } from 'react';
import Pagination from '../../client/Pagination';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';

const Categories = () => {

  const [category, setCategory] = useState(JSON.parse(Cookies.get('category') || '[]'));
  const categoryIdHandler = (e) => {
    console.log("🚀 ~ file: index.jsx:10 ~ categoryIdHandler ~ e:", e)
    window.localStorage.setItem('categoryId' , e)
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-2">
          <h1 className="h3 mb-4 text-gray-800">Categpry Page</h1>
        </div>
        <div className="col-lg-2">
          <a className="btn btn-primary mb-4" href="/manage/Category/create">
            Create
          </a>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <table className="table table-bordered table-striped ">
            <thead>
              <tr>
                <th>№</th>
                <th>Name</th>
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
                    <tr key={index}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{new Date(item.createdAt).toLocaleDateString('en-US')}</td>
                      <td>{item.createdBy}</td>
                      <td>{item.updatedAt}</td>
                      <td className="d-flex justify-content-around">
                        <Link className="btn btn-primary" to="update">
                          Detail
                        </Link>
                        <Link
                          className="btn btn-warning"
                          to="update"
                          onClick={() => categoryIdHandler(item.id)}>
                          Update
                        </Link>
                        <Link className="btn btn-danger " to="update">
                          Delete
                        </Link>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
        <div className="col-lg-12">
          <Pagination count={Math.ceil(category.length / 8)}  />
        </div>
      </div>
    </div>
  );
};

export default Categories;
