import axios from 'axios';
import Cookies from 'js-cookie';
import React, { useEffect, useRef, useState } from 'react';

const Update = () => {
  const [categoryId, setCategoryId] = useState(localStorage.getItem('categoryId'));
  const [category, setCategory] = useState({});
  const [selectedFile, setSelectedFile] = useState(null);
  const [name, setName] = useState('');

  const handleChange = (e) => {
    console.log(e.target.files);
    setSelectedFile(e.target.files[0]);
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
      const res = axios.put(`https://localhost:44389/api/Category/update-category`, formData,{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(res.PromiseState);
      alert('Data updated successfully');
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
        <div className="col-lg-6 ">
          <div className="col-lg-5 my-3">
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
          <div className="form-group my-3 col-lg-6 ">
            <label className="d-block">ImageFile</label>
            <input
              type="file"
              className="btn btn-danger my-2"
              accept="image/*,.png,.jpg,.web"
              onChange={handleChange}
            />
            <button onClick={handleUpload} className="mt-2 btn btn-primary">
              Image now!
            </button>

            {selectedFile && (
              <ul>
                <li>Name : {selectedFile.name}</li>
                <li>Size : {selectedFile.size}</li>
                <li>Type : {selectedFile.type}</li>
              </ul>
            )}
            <span className="text text-danger field-validation-valid"></span>
          </div>
          <div className="col-lg-12 text-center">
            <input type="submit" className="btn btn-primary mt-5 col-lg-6 mx-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Update;
