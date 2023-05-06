import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const Create = () => {
  const token = window.localStorage.getItem('userToken');
  const { register, handleSubmit, setValue } = useForm();

  const submitForm = async (data) => {
    console.log('🚀 ~ file: Create.jsx:10 ~ submitForm ~ data:', data);
    if (data.Password !== data.ConfirmPassword) {
      alert('Password mismatch');
      return;
    }
    try {
      const res = await axios.post('https://localhost:44389/api/User', data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: `User successfully created`,
        showConfirmButton: false,
        timer: 2000,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container-fluid">
      <h1>Create</h1>
      <div className="col-lg-2">
        <h1 className="h3 mb-4 text-gray-800">Create User Page</h1>
      </div>
      <div className="row">
        <form onSubmit={handleSubmit(submitForm)}>
          <div className="col-lg-8 d-flex flex-wrap justify-content-between">
            <div className="col-lg-5 mb-3">
              <label className="form-label">Name</label>
              <input
                required={true}
                {...register('Name')}
                className="form-control"
                type="text"
                id="Name"
                maxLength="20"
              />
              <span className="text text-danger field-validation-valid"></span>
            </div>
            <div className="col-lg-5 mb-3">
              <label className="form-label">SurName</label>
              <input
                required={true}
                {...register('SurName')}
                className="form-control"
                type="text"
                maxLength="20"
              />
              <span className="text text-danger field-validation-valid"></span>
            </div>
            <div className="col-lg-5 mb-3">
              <label className="form-label">Phone</label>
              <input {...register('Phone')} className="form-control" type="text" maxLength="20" />
              <span className="text text-danger field-validation-valid"></span>
            </div>
            <div className="col-lg-5 mb-3">
              <label className="form-label">Email</label>
              <input required={true} {...register('Email')} className="form-control" type="email" />
              <span className="text text-danger field-validation-valid"></span>
            </div>
            <div className="col-lg-5 mb-3">
              <label className="form-label">UserName</label>
              <input
                required={true}
                {...register('UserName')}
                className="form-control valid"
                type="text"
              />
              <span className="text text-danger field-validation-valid"></span>
            </div>
            <div className="col-lg-5 mb-3">
              <label className="form-label">RoleName</label>
              <select
                required={true}
                onChange={(e) => setValue('RoleName', e.target.value)}
                className="form-control"
                id="RoleId"
                name="RoleId">
                <option value="---">---</option>
                <option value="Admin">Admin</option>
                <option value="Member">Member</option>
              </select>
              <span className="text text-danger field-validation-valid"></span>
            </div>
            <div className="col-lg-5 mb-3">
              <label required={true} className="form-label">
                Password
              </label>
              <input
                {...register('Password')}
                className="form-control"
                type="password"
                maxLength="20"
              />
              <span className="text text-danger field-validation-valid"></span>
            </div>
            <div className="col-lg-5 mb-3">
              <label className="form-label">Confirm Password</label>
              <input
                required={true}
                {...register('ConfirmPassword')}
                className="form-control"
                type="password"
                maxLength="20"
              />
              <span className="text text-danger"></span>
            </div>
          </div>
          <button type="submit" className="btn btn-primary col-lg-5 mx-auto mt-5">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Create;
