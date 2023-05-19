import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const Detail = () => {
  const productId = localStorage.getItem('productId');
  const [product, setProduct] = useState(null);
  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const { data } = await axios.get(`https://217.76.63.20:44389/api/product/${productId}`);
        setProduct(data);
      } catch (error) {
        alert('Datada sehv');
      }
    };
    fetchCategory();
  }, []);
  return (
    <div className="container-fluid">
      {product && (
        <>
          <div className="row">
            <div className="col-lg-4">
              <h1 className="h3 mb-4 text-gray-400">Product Detail Page</h1>
            </div>
          </div>

          <div className="row">
            <div className=" col-lg-4 my-3">
              <div className="text-center btn shadow">
                <h5 className="">
                  Product Name :{' '}
                  <span style={{ fontWeight: 'bold' }} className=" text-lg-center">
                    {product.title}
                  </span>{' '}
                </h5>
              </div>
            </div>
            <div className="col-lg-12">
              <table className="table table-bordered table-striped ">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Discount Price</th>
                    <th>Created At</th>
                    <th>Created By</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{product.id}</td>
                    <td>
                      <img style={{ width: '100px' }} src={product.image} alt="image" />
                    </td>
                    <td>{product.title}</td>
                    <td>{product.price}</td>
                    <td>{product.discountedPrice}</td>
                    <td>{new Date(product.createdAt).toLocaleDateString('en-US')}</td>
                    <td>{product.createdBy}</td>
                  </tr>
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
