import React from 'react';

const index = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-2">
          <h1 className="h3 mb-4 text-gray-800">User Page</h1>
        </div>
        <div className="col-lg-2">
          <a className="btn btn-primary mb-4" href="/manage/user/create">
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
                <th>SurName</th>
                <th>Email/th&gt;</th>
                <th>UserName</th>
                <th>RoleName</th>
                <th>LockoutEnd </th>
                <th>Settings</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Admin</td>
                <td>Admin</td>
                <td>Admin@gmail.com</td>
                <td>Admin-Test</td>
                <td>Admin</td>
                <td></td>

                <td className='d-flex justify-content-around'>
                  <a
                    className="btn btn-warning"
                    href="/manage/user/ChangeRole/610af6e6-de10-4432-982b-d998383b12c3">
                    ChangeRole
                  </a>
                  <a
                    className="btn btn-danger"
                    href="/manage/user/block/610af6e6-de10-4432-982b-d998383b12c3">
                    Block
                  </a>
                  <a
                    className="btn btn-warning"
                    href="/manage/user/Unblock?userId=610af6e6-de10-4432-982b-d998383b12c3">
                    Unblock
                  </a>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Ugur</td>
                <td>Nazarov</td>
                <td>Ugur@gmail.com</td>
                <td>Ugur</td>
                <td>Admin</td>
                <td></td>

                <td>
                  <a
                    className="btn btn-warning"
                    href="/manage/user/ChangeRole/6223a69a-9e7e-431e-a9ba-63a2bb7a21a8">
                    ChangeRole
                  </a>
                  <a
                    className="btn btn-danger"
                    href="/manage/user/block/6223a69a-9e7e-431e-a9ba-63a2bb7a21a8">
                    Block
                  </a>
                  <a
                    className="btn btn-warning"
                    href="/manage/user/Unblock?userId=6223a69a-9e7e-431e-a9ba-63a2bb7a21a8">
                    Unblock
                  </a>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Elnur</td>
                <td>Aliyev</td>
                <td>Elnur@gmail.com</td>
                <td>Elnur</td>
                <td>Menber</td>
                <td></td>

                <td>
                  <a
                    className="btn btn-warning"
                    href="/manage/user/ChangeRole/a3c5b319-d9ec-4c18-8024-6e125e704bfa">
                    ChangeRole
                  </a>
                  <a
                    className="btn btn-danger"
                    href="/manage/user/block/a3c5b319-d9ec-4c18-8024-6e125e704bfa">
                    Block
                  </a>
                  <a
                    className="btn btn-warning"
                    href="/manage/user/Unblock?userId=a3c5b319-d9ec-4c18-8024-6e125e704bfa">
                    Unblock
                  </a>
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>test</td>
                <td>test</td>
                <td>test-2@gmail.com</td>
                <td>test22</td>
                <td>Menber</td>
                <td></td>

                <td>
                  <a
                    className="btn btn-warning"
                    href="/manage/user/ChangeRole/c6306999-1b45-4cd7-9e23-b9881b0bbb58">
                    ChangeRole
                  </a>
                  <a
                    className="btn btn-danger"
                    href="/manage/user/block/c6306999-1b45-4cd7-9e23-b9881b0bbb58">
                    Block
                  </a>
                  <a
                    className="btn btn-warning"
                    href="/manage/user/Unblock?userId=c6306999-1b45-4cd7-9e23-b9881b0bbb58">
                    Unblock
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
                <a className="page-link" href="/manage/user?pageIndex=1">
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
