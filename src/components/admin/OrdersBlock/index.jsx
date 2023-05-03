import React from 'react';

const index = () => {
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
                <th>Total</th>
                <th>Status</th>
                <th>Comment</th>
                <th>Settings</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Ugur Nazarov </td>
                <td>25-Mar-2023</td>
                <td>2</td>
                <td className="text-success">$130.00</td>
                <td>Pending</td>
                <td></td>
                <td>
                  <a className="btn btn-primary" href="/manage/order/detail/4">
                    Detail
                  </a>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Ugur Nazarov </td>
                <td>25-Mar-2023</td>
                <td>1</td>
                <td className="text-success">$80.00</td>
                <td>Pending</td>
                <td></td>
                <td>
                  <a className="btn btn-primary" href="/manage/order/detail/5">
                    Detail
                  </a>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>test test </td>
                <td>28-Apr-2023</td>
                <td>1</td>
                <td className="text-success">$70.00</td>
                <td>Pending</td>
                <td></td>
                <td>
                  <a className="btn btn-primary" href="/manage/order/detail/6">
                    Detail
                  </a>
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>test test </td>
                <td>28-Apr-2023</td>
                <td>1</td>
                <td className="text-success">$60.00</td>
                <td>Pending</td>
                <td></td>
                <td>
                  <a className="btn btn-primary" href="/manage/order/detail/7">
                    Detail
                  </a>
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>Elnur Aliyev </td>
                <td>29-Apr-2023</td>
                <td>4</td>
                <td className="text-success">$350.00</td>
                <td>Pending</td>
                <td></td>
                <td>
                  <a className="btn btn-primary" href="/manage/order/detail/8">
                    Detail
                  </a>
                </td>
              </tr>
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

export default index;
