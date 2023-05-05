import axios from 'axios';
import Cookies from 'js-cookie';
import React, { useEffect, useRef, useState } from 'react';
import Swal from 'sweetalert2';

const Create = () => {
  const filePick = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageError, setImageError] = useState(false);
  const [name, setName] = useState('');

  const handleChange = (e) => {
    console.log(e.target.files);
    setSelectedFile(e.target.files[0]);
  };
  const handlePick = () => {
    filePick.current.click();
  };

  const token = window.localStorage.getItem('userToken');

  const handleUpload = async (event) => {
    event.preventDefault();
    if (!selectedFile) {
      return setImageError(true);
    }
    const formData = new FormData();
    formData.append('Name', name);
    formData.append('ImageFile', selectedFile);

    try {
      const res = await axios.post(`https://localhost:44389/api/Category/create`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: `A new Category (${name}) has been created`,
        showConfirmButton: false,
        timer: 2000
      })
    } catch (error) {
      alert('There was an error fetching the data');
    }
  };

  return (
    <div className="container-fluid ">
      <div className="col-lg-2">
        <h1 className="h3 mb-4 text-gray-800">Create Category</h1>
      </div>
      <div className="row">
        <div className="col-lg-6 text-center">
          <div className="col-lg-6 my-3">
            <label className="form-label">Name</label>
            <input
              className="form-control"
              type="text"
              id="Title"
              onChange={(event) => setName(event.target.value)}
            />
            <span className="text text-danger"></span>
          </div>
          {
            imageError ? <div className="col-lg-6  bi-image-fill p-2" >
            <span className="text text-danger p-2">Image is required</span>
          </div> : ''
          }
          <div className="form-group my-3 col-lg-6 align-items-center">
            <button onClick={handlePick} className="btn btn-outline-primary  mx-2">
              Image..
            </button>
            <button onClick={handleUpload} className="btn btn-primary mx-2">
              SUBMIT
            </button>
            <input
              ref={filePick}
              type="file"
              className="btn btn-danger my-2 visually-hidden"
              accept="image/*,.png,.jpg,.web"
              onChange={handleChange}
            />

            {selectedFile && (
              <div className="mt-5">
                <img src={URL.createObjectURL(selectedFile)} alt="" />
              </div>
            )}
            <span className="text text-danger field-validation-valid"></span>
          </div>
          <div className="col-lg-6 "></div>
        </div>
      </div>
    </div>
  );
};
export default Create;
