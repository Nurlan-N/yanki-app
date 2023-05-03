import React from 'react';
import Pagination from '../../client/Pagination'

const index = () => {
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
              <tr>
                <td>1</td>
                <td>
                  <img style={{width: "100px"}} src="/assets/img/product/product-3.jpg" />
                </td>
                <td>Rexpo Womens shoes</td>
                <td>03-Dec-2023</td>
                <td>System</td>
                <td className='d-flex justify-content-around'>
                  <a className="btn btn-primary" href="/manage/product/detail/15">
                    Detail
                  </a>
                  <a className="btn btn-warning" href="/manage/product/update/15">
                    Update
                  </a>
                  <a className="btn btn-danger deleteBtn" href="/manage/product/delete/15">
                    Delete
                  </a>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>
                  <img style={{width: "100px"}} src="/assets/img/product/product-5.jpg" />
                </td>
                <td>Primitive Mens Premium Shoes</td>
                <td>03-Dec-2023</td>
                <td>System</td>
                <td>
                  <a className="btn btn-primary" href="/manage/product/detail/17">
                    Detail
                  </a>
                  <a className="btn btn-warning" href="/manage/product/update/17">
                    Update
                  </a>
                  <a className="btn btn-danger deleteBtn" href="/manage/product/delete/17">
                    Delete
                  </a>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>
                  <img style={{width: "100px"}} src="/assets/img/product/product-6.jpg" />
                </td>
                <td>Quickiin Mens shoes</td>
                <td>03-Dec-2023</td>
                <td>System</td>
                <td>
                  <a className="btn btn-primary" href="/manage/product/detail/18">
                    Detail
                  </a>
                  <a className="btn btn-warning" href="/manage/product/update/18">
                    Update
                  </a>
                  <a className="btn btn-danger deleteBtn" href="/manage/product/delete/18">
                    Delete
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-lg-12">
          <Pagination/>
        </div>
      </div>
    </div>
  );
};

export default index;
