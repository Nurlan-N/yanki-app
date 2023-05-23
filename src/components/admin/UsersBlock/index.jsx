import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Pagination from '../../client/Pagination';
import styles from './UsersBlock.module.scss';
import { Await, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const Users = () => {
  const [users, setUsers] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(null);
  const token = window.localStorage.getItem('userToken');
  const [changeRoleDisplay, setChangeRoleDisplay] = useState(false);
  const [blockDisplay, setBlockDisplay] = useState(false);
  const [email, setEmail] = useState(null);
  const [blockDate, setBlockDate] = useState('');
  const [id, setId] = useState('');

  const { handleSubmit, setValue } = useForm();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `http://217.76.63.20:44389/api/User?page=${currentPage}&limit=5`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
        setUsers(data.users);
        setPageCount(data.count);
      } catch (error) {}
    };
    fetchData();
  }, [currentPage, id]);
  const onChangePage = (e) => {
    setCurrentPage(e.selected + 1);
  };

  const changeRoleHandler = async (user) => {
    {
      setValue('UserId', user.id);
    }
    setEmail(user.email);
    setChangeRoleDisplay(!changeRoleDisplay);
  };
  const submitForm = async (data) => {
    try {
      const res = await axios.put('http://217.76.63.20:44389/api/User/change-role', data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: `Role changed successfully `,
        showConfirmButton: false,
        timer: 2000,
      });
      setChangeRoleDisplay(false);
    } catch (error) {
      console.log(error);
    }
  };
  const blockHandler = (user) => {
    setEmail(user.email);
    setId(user.id);
    setBlockDisplay(!blockDisplay);
  };
  const unblockHandle = async (id) => {
    try {
      await axios.put(
        `http://217.76.63.20:44389/api/user/unblock?userId=${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      alert('User has been unblocked successfully');
      setId(1);
    } catch (error) {
      alert('Error occurred while unblocking user');
    }
  };
  const submitBlock = async (event) => {
    event.preventDefault();
    try {
      await axios.put(
        `http://217.76.63.20:44389/api/user/block?id=${id}&blockDate=${blockDate}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      alert('User has been blocked successfully');
      setId('');
    } catch (error) {
      alert('Error occurred while blocking user');
    }
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-2">
          <h1 className="h3 mb-4 text-gray-800">User Page</h1>
        </div>
        <div className="col-lg-2">
          <Link className="btn btn-primary mb-4" to="create">
            Create
          </Link>
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
              {users &&
                users.map((obj, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{obj.name}</td>
                      <td>{obj.surName}</td>
                      <td>{obj.email}</td>
                      <td>{obj.userName}</td>
                      <td>{obj.roleName}</td>
                      <td>{obj.lockoutEnd}</td>

                      <td className="d-flex justify-content-around">
                        <button className="btn btn-warning" onClick={() => changeRoleHandler(obj)}>
                          ChangeRole
                        </button>
                        <button onClick={() => blockHandler(obj)} className="btn btn-danger">
                          Block
                        </button>
                        <button onClick={() => unblockHandle(obj.id)} className="btn btn-warning">
                          Unblock
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
        <div className="col-lg-12">
          <Pagination count={Math.ceil(pageCount / 5)} onChangePage={onChangePage} />
        </div>
      </div>
      <div
        style={
          changeRoleDisplay
            ? { top: '20%', transition: 'ease-in-out 0.5s' }
            : { transition: 'ease-in-out 0.5s' }
        }
        className={styles.modal_change_role}>
        <div className="position-relative">
          <button
            onClick={() => setChangeRoleDisplay(false)}
            style={{ right: '5px' }}
            className="btn btn-danger position-absolute ">
            X
          </button>
        </div>
        <h5>Change Role</h5>
        <p>User Email : {email}</p>
        <select
          onChange={(e) => setValue('RoleName', e.target.value)}
          required={true}
          className="form-control bx-selection ">
          <option value="---">---</option>
          <option value="Admin">Admin</option>
          <option value="Member">Member</option>
        </select>
        <button onClick={handleSubmit(submitForm)} className="btn btn-primary mt-2">
          Save
        </button>
      </div>
      <div
        style={
          blockDisplay
            ? { top: '20%', transition: 'ease-in-out 0.5s' }
            : { transition: 'ease-in-out 0.5s' }
        }
        className={styles.block_modal}>
        <div className="position-relative">
          <button
            onClick={() => setBlockDisplay(false)}
            style={{ right: '5px' }}
            className="btn btn-danger position-absolute ">
            X
          </button>
        </div>
        <h5>Block User</h5>
        <p>User Email: {email}</p>
        <form onSubmit={submitBlock}>
          <div className="mb-3">
            <label htmlFor="blockDate" className="form-label">
              Block Date
            </label>
            <input
              type="date"
              className="form-control"
              id="blockDate"
              value={blockDate}
              onChange={(e) => setBlockDate(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Block User
          </button>
        </form>
      </div>
    </div>
  );
};

export default Users;
