import React from 'react';

const index = () => {
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
                <th>Product Count</th>
                <th>Settings</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mens</td>
                <td>03-Dec-2023</td>
                <td>System</td>
                <td>2</td>
                <td className='d-flex justify-content-around' >
                  <a className="btn btn-primary" href="/manage/category/detail/1">
                    Detail
                  </a>
                  <a className="btn btn-warning" href="/manage/category/update/1">
                    Update
                  </a>
                  <a className="btn btn-danger " href="/manage/category/delete/1">
                    Delete
                  </a>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Womens</td>
                <td>03-Dec-2023</td>
                <td>System</td>
                <td>3</td>
                <td>
                  <a className="btn btn-primary" href="/manage/category/detail/2">
                    Detail
                  </a>
                  <a className="btn btn-warning" href="/manage/category/update/2">
                    Update
                  </a>
                  <a className="btn btn-danger " href="/manage/category/delete/2">
                    Delete
                  </a>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Sports</td>
                <td>03-Dec-2023</td>
                <td>System</td>
                <td>3</td>
                <td>
                  <a className="btn btn-primary" href="/manage/category/detail/3">
                    Detail
                  </a>
                  <a className="btn btn-warning" href="/manage/category/update/3">
                    Update
                  </a>
                  <a className="btn btn-danger " href="/manage/category/delete/3">
                    Delete
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
              <li className="page-item ">
                <a className="page-link" href="/manage/category?pageIndex=2">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="/manage/category?pageIndex=2">
                  Next
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
