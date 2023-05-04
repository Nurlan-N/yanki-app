import axios from 'axios';
import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

const Update = () => {
  const [product, setProduct] = useState({});
  const [category, setCategory] = useState(JSON.parse(Cookies.get('category') || '[]'));
  const { register, handleSubmit, setValue } = useForm();
  const id = localStorage.getItem('productId');
  const token = window.localStorage.getItem('userToken');
  useEffect(() => {
    if (product) {
      setValue('Id', product.id);
      setValue('Title', product.title);
      setValue('Price', product.price);
      setValue('DiscountedPrice', product.discountedPrice);
      setValue('ExTax', product.exTax);
      setValue('Count', product.count);
      setValue('Description', product.description);
      setValue('ImageFile', product.image);
      setValue('Files', product.productImages);
      setValue('CategoryId', product.categoryId);
    }
  }, [product]);

  const submitForm = async (data) => {
    try {
      const response = await axios.put('https://localhost:44389/api/Product/update', data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
      alert('Data updated successfully');
    } catch (error) {
      console.error('An error occurred while fetching the data:', error);
      alert('There was an error fetching the data');
    }
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get(`https://localhost:44389/api/Product/${id}`);
        setProduct(data);
      } catch (error) {
        alert('There was an error fetching the data');
      }
    }
    fetchData();
  }, [id]);

  return (
    <div className="container-fluid ">
      <div className="col-lg-2">
        <h1 className="h3 mb-4 text-gray-800">Product Update</h1>
      </div>
      <div className="row">
        <div className="col-lg-6 ">
          <form
            typeof="multipart/form-data"
            method="post "
            className="d-flex flex-wrap justify-content-between"
            onSubmit={handleSubmit(submitForm)}>
            <div className="col-lg-5 my-3">
              <label className="form-label">Title</label>
              <input className="form-control" {...register('Title')} type="text" id="Title" />
              <span className="text text-danger"></span>
            </div>
            <div className="col-lg-5 my-3">
              <label className="form-label">Price</label>
              <input className="form-control" {...register('Price')} type="text" id="Title" />
              <span className="text text-danger"></span>
            </div>
            <div className="col-lg-5 my-3">
              <label className="form-label">Discount Price</label>
              <input
                {...register('DiscountedPrice')}
                className="form-control"
                type="text"
                id="Title"
              />
              <span className="text text-danger"></span>
            </div>
            <div className="col-lg-5 my-3">
              <label className="form-label">ExTax</label>
              <input className="form-control" {...register('ExTax')} type="text" id="Title" />
              <span className="text text-danger"></span>
            </div>
            <div className="col-lg-5 my-2">
              <label className="form-label">Count</label>
              <input className="form-control " {...register('Count')} type="text" id="Title" />
              <span className="text text-danger"></span>
            </div>
            <div className="form-group col-lg-5 my-3">
              <label>Category</label>
              <select
                className="form-control"
                {...register('CategoryId')}
                id="CategoryId"
                name="CategoryId">
                {category &&
                  category.map((c) => {
                    return c.id == product.categoryId ? (
                      <option key={c.id} selected={true} value={c.id}>
                        {c.name}
                      </option>
                    ) : (
                      <option key={c.id} value={c.id}>
                        {c.name}
                      </option>
                    );
                  })}
              </select>
              <span className="text text-danger field-validation-valid"></span>
            </div>

            <div className="form-group my-3 col-lg-6 ">
              <label>ImageFile</label>
              <input
                {...register('ImageFile')}
                type="file"
                className="form-control-file   btn btn-outline-primary"
                id="ImageFile"
                name="ImageFile"
              />
              <span className="text text-danger field-validation-valid"></span>
            </div>
            <div className="form-group col-lg-6 my-3">
              <label>Files</label>
              <input
                {...register('Files')}
                multiple=""
                type="file"
                className="form-control-file btn btn-outline-primary"
                id="Files"
                name="Files"
              />
              <span className="text text-danger field-validation-valid"></span>
            </div>
            <div className="row productImage"></div>

            <div className="form-group col-lg-12">
              <label>Description</label>
              <textarea
                {...register('Description')}
                className="form-control"
                rows="3"
                id="Description"
                maxLength="1000"
                name="Description"></textarea>
            </div>
            <div className="col-lg-12 text-center">
              <button type="submit" className="btn btn-primary mt-5 col-lg-6 mx-auto">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Update;
