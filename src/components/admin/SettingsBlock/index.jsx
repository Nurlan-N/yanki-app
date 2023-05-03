import React from 'react';

const index = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-2">
          <h1 className="h3 mb-4 text-gray-800">Settings Page</h1>
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
                <th>Key</th>
                <th>Value</th>
                <th>Settings</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Logo</td>
                <td>logo.png</td>

                <td>
                  <a className="btn btn-warning" href="/manage/setting/update/1">
                    Update
                  </a>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Slogan</td>
                <td>Welcome to Juan online store</td>

                <td>
                  <a className="btn btn-warning" href="/manage/setting/update/2">
                    Update
                  </a>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Address</td>
                <td>184 Main Rd E, St Albans VIC 3021, Australia</td>

                <td>
                  <a className="btn btn-warning" href="/manage/setting/update/3">
                    Update
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
                <a className="page-link" href="/manage/setting?pageIndex=1">
                  1
                </a>
              </li>
              <li className="page-item ">
                <a className="page-link" href="/manage/setting?pageIndex=2">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="/manage/setting?pageIndex=2">
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
