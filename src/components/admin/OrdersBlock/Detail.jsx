import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const Detail = () => {
  const token = window.localStorage.getItem('userToken');
  const id = window.localStorage.getItem('orderId');
  const [order, setOrder] = useState(null);
  console.log('🚀 ~ file: Detail.jsx:10 ~ Detail ~ order:', order);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get(`https://217.76.63.20:44389/api/Order?id=${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setOrder(data);
      } catch (error) {
        alert('Datada sehv');
      }
    }
    fetchData();
  }, []);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-2">
          <h1 className="h3 mb-4 text-gray-800">Detail Page</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <table className="table table-bordered table-striped ">
            <thead>
              <tr>
                <th>№</th>
                <th>Image :</th>
                <th>Name</th>
                <th>Price</th>
                <th>Created At</th>
              </tr>
            </thead>
            <tbody>
              {order &&
                order.orderItems.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>
                        <img style={{ width: '100px' }} src={item.product.image} alt="" />
                      </td>
                      <td>{item.product.title}</td>
                      <td className="text-success">${item.product.price}</td>
                      <td>{new Date(item.createdAt).toLocaleDateString('en-US')}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
        <div className="col-lg-12">
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className="page-item active">
                <a className="page-link" href="/manage/category?pageIndex=1">
                  1
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Detail;
