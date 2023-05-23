import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const Detail = () => {
  const categoryId = localStorage.getItem('categoryId');
  const [category, setCategory] = useState(null);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const { data } = await axios.get(`http://217.76.63.20:44389/api/Category/${categoryId}`);
        setCategory(data);
        setProducts(data.Products.$values);
      } catch (error) {
        alert('Datada sehv');
      }
    };
    fetchCategory();
  }, []);
  return (
    <div className="container-fluid">
      {category && (
        <>
          <div className="row">
            <div className="col-lg-2">
              <h1 className="h3 mb-4 text-gray-400">Category Detail Page</h1>
            </div>
            <div className=" col-lg-4">
              <div className="text-center btn shadow">
                <h5 className="">
                  Category Name :{' '}
                  <span style={{ fontWeight: 'bold' }} className=" text-lg-center">
                    {category.Name}
                  </span>{' '}
                </h5>
              </div>
            </div>
          </div>

          <div className="row">
            <h4>Products</h4>
            <div className="col-lg-12">
              <table className="table table-bordered table-striped ">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Created At</th>
                    <th>Created By</th>
                  </tr>
                </thead>
                <tbody>
                  {products &&
                    products.map((item) => {
                      return (
                        <tr key={item.$id}>
                          <td>{item.$id}</td>
                          <td>
                            <img style={{ width: '100px' }} src={item.Image} alt="image" />
                          </td>
                          <td>{item.Title}</td>
                          <td>{new Date(item.CreatedAt).toLocaleDateString('en-US')}</td>
                          <td>{item.CreatedBy}</td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Detail;
