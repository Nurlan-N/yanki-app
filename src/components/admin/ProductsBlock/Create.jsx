import axios from 'axios';
import Cookies from 'js-cookie';
import React, { useEffect, useRef, useState } from 'react';
import Swal from 'sweetalert2';

const Create = () => {
  const categories = JSON.parse(Cookies.get('category') || '[]');
  const token = window.localStorage.getItem('userToken');
  const filePick = useRef(null);
  const filesPick = useRef(null);

  const [title, setTitle] = useState(null);
  const [price, setPrice] = useState(null);
  const [discountPrice, setDiscountPrice] = useState(null);
  const [exTax, setExTax] = useState(null);
  const [count, setCount] = useState(null);
  const [category, setCategory] = useState(null);
  console.log("🚀 ~ file: Create.jsx:18 ~ Create ~ category:", category)
  const [description, setDescription] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFiles, setSelectedFiles] = useState([]);



  const handleChange = (e) => {
    if (e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };
  const handleImages = (e) => {
    if (e.target.files.length > 0) {
      setSelectedFiles(e.target.files);
    }
  };
  const handlePick = () => {
    filePick.current.click();
  };
  const handleFilesPick = () => {
    filesPick.current.click();
  };
  const handleUpload = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('Title', title);
    formData.append('Price', price);
    formData.append('DiscountPrice', discountPrice);
    formData.append('ExTax', exTax);
    formData.append('Count', count);
    formData.append('CategoryId', category);
    formData.append('Description', description);
    formData.append('ImageFile', selectedFile);
    for (const file of selectedFiles) {
      formData.append('Files', file);
    }

    try {
      const res = await axios.post(`https://localhost:44389/api/Product/create`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: `Product created successfully`,
        showConfirmButton: false,
        timer: 2000,
      });
    } catch (error) {
      const errorMessage = error.errors.Files[0];
      console.log(errorMessage);
    }
  };

  return (
    <div className="container-fluid ">
      <div className="col-lg-2">
        <h1 className="h3 mb-4 text-gray-800">Product Create</h1>
      </div>
      <div className="row">
        <div className="col-lg-6  d-flex flex-wrap justify-content-between">
          <div className="col-lg-6 my-3">
            <label className="form-label">Title</label>
            <input
              className="form-control"
              type="text"
              id="Title"
              defaultValue={title}
              onChange={(event) => setTitle(event.target.value)}
            />
            <span className="text text-danger"></span>
          </div>
          <div className="col-lg-5 my-3">
            <label className="form-label">Price</label>
            <input
              className="form-control"
              type="text"
              id="Title"
              defaultValue={price}
              onChange={(event) => setPrice(event.target.value)}
            />
            <span className="text text-danger"></span>
          </div>
          <div className="col-lg-6 my-3">
            <label className="form-label">Discount Price</label>
            <input
              className="form-control"
              type="text"
              id="Title"
              defaultValue={discountPrice}
              onChange={(event) => setDiscountPrice(event.target.value)}
            />
            <span className="text text-danger"></span>
          </div>
          <div className="col-lg-5 my-3">
            <label className="form-label">ExTax</label>
            <input
              className="form-control"
              type="text"
              id="Title"
              defaultValue={exTax}
              onChange={(event) => setExTax(event.target.value)}
            />
            <span className="text text-danger"></span>
          </div>
          <div className="col-lg-6 my-2 ">
            <label className="form-label">Count</label>
            <input
              className="form-control "
              type="text"
              id="Title"
              defaultValue={count}
              onChange={(event) => setCount(event.target.value)}
            />
            <span className="text text-danger"></span>
          </div>
          <div className="col-lg-5 my-3">
            <label>Category</label>
            <select
              className="form-control"
              id="CategoryId"
              name="CategoryId"
              onChange={(event) => setCategory(event.target.value)}>
              {categories &&
                categories.map((c) => {
                  return (
                    <option key={c.id} value={c.id}>
                      {c.name}
                    </option>
                  );
                })}
            </select>
            <span className="text text-danger field-validation-valid"></span>
          </div>
          <div className="=col-lg-6 my-3" style={{ width: '50%' }}>
            <button onClick={handlePick} className="btn btn-outline-primary  mx-2">
              Add Main Image..
            </button>

            <input
              ref={filePick}
              type="file"
              className="btn btn-danger visually-hidden"
              accept="image/*,.png,.jpg,.web"
              onChange={handleChange}
            />

            {selectedFile && (
              <div className="mt-5">
                <img src={URL.createObjectURL(selectedFile)} alt="Main Image" />
              </div>
            )}
            <span className="text text-danger field-validation-valid"></span>
          </div>
          <div className="col-lg-6 my-3 " style={{ width: '37%' }}>
            <button onClick={handleFilesPick} className="btn btn-outline-primary ">
              Add Product Images..
            </button>
            <input
              multiple={true}
              ref={filesPick}
              onChange={handleImages}
              type="file"
              className="visually-hidden"
              id="Files"
              accept="image/*,.png,.jpg,.web"
            />
            <div className="images col-lg-12 d-flex flex-wrap justify-content-between">
            
            </div>
            <span className="text text-danger field-validation-valid"></span>
          </div>
          <div className="row productImage"></div>

          <div className="form-group col-lg-12">
            <label>Description</label>
            <textarea
              className="form-control"
              rows="3"
              id="Description"
              maxLength="1000"
              name="Description"
              defaultValue={description}
              onChange={(event) => setDescription(event.target.value)}></textarea>
          </div>
          <div className="col-lg-12 text-center">
            <button onClick={handleUpload} className="btn btn-primary my-2 col-lg-5">
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
