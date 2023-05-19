import axios from 'axios';
import Cookies from 'js-cookie';
import React, { useEffect, useRef, useState } from 'react';
import Swal from 'sweetalert2';

const Update = () => {
  const [categoryId, setCategoryId] = useState(localStorage.getItem('categoryId'));
  const [category, setCategory] = useState({});
  const filePick = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [name, setName] = useState('');

  const handleChange = (e) => {
    console.log(e.target.files);
    setSelectedFile(e.target.files[0]);
  };
  const handlePick = () => {
    filePick.current.click();
  };

  useEffect(() => {
    const categories = JSON.parse(Cookies.get('category'));
    const matchingCategory = categories.find((c) => c.id == categoryId);
    setCategory(matchingCategory || {});
  }, [categoryId]);

  const token = window.localStorage.getItem('userToken');

  const handleUpload = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('Id', categoryId);
    formData.append('Name', name);
    formData.append('ImageFile', selectedFile);

    try {
      const res = await axios.put(
        `https://217.76.63.20:44389/api/Category/update-category`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: `Category (${name}) has been updated`,
        showConfirmButton: false,
        timer: 2000,
      });
    } catch (error) {
      alert('There was an error fetching the data');
    }
  };

  return (
    <div className="container-fluid ">
      <div className="col-lg-2">
        <h1 className="h3 mb-4 text-gray-800">Product Update</h1>
      </div>
      <div className="row">
        <div className="col-lg-6 text-center">
          <div className="col-lg-6 my-3">
            <label className="form-label">Name</label>
            <input
              className="form-control"
              type="text"
              id="Title"
              defaultValue={category.name}
              onChange={(event) => setName(event.target.value)}
            />
            <span className="text text-danger"></span>
          </div>
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
export default Update;
