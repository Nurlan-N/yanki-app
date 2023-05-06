import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Orders = () => {
  const [orders, setOrders] = useState(null);
  const token = window.localStorage.getItem('userToken');

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get(`https://localhost:44389/api/Order`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setOrders(data);
      } catch (error) {
        alert('Datada sehv');
      }
    }
    fetchData();
  }, []);

  const orderIdHandler = (e) => {
    window.localStorage.setItem('orderId', e);
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-2">
          <h1 className="h3 mb-4 text-gray-800">Order Page</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <table className="table table-bordered table-striped ">
            <thead>
              <tr>
                <th>№</th>
                <th>Full Name</th>
                <th>Created At</th>
                <th>Product Count</th>
                <th>Total Price</th>
                <th>Status</th>
                <th>Settings</th>
              </tr>
            </thead>
            <tbody>
              {orders &&
                orders.map((order, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{order.name + ' ' + order.surName}</td>
                      <td>{new Date(order.createdAt).toLocaleDateString('en-US')}</td>
                      <td>{order.orderItems.length}</td>
                      <td className="text-success">${order.totalPrice}</td>
                      <td>{order.status}</td>
                      <td>
                        <Link
                          onClick={() => orderIdHandler(order.id)}
                          className="btn btn-primary"
                          to="detail">
                          Detail
                        </Link>
                      </td>
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

export default Orders;
