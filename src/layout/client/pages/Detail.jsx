import React, { useRef } from 'react';
import PageMap from '../../../components/client/PageMap';
import ButtonSubmit from '../../../components/client/ButtonSubmit';
import m1 from '../../../assets/img/detail/1.png';
import heart from '../../../assets/img/icon/wishlist_gold.png';
import Select from 'react-select';
import ShopItem from '../../../components/client/ShopItemBlock';
import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import qs from 'qs';

const sizeOptions = [
  { value: 'xl', label: 'XL' },
  { value: 'xxl', label: 'XXL' },
  { value: 'ms', label: 'MS' },
];
const SizeSelect = () => (
  <Select className="size-select" options={sizeOptions} placeholder="Size.." />
);
const Detail = () => {
  const { wishlist } = useSelector((state) => state.product);

  const [product, setProduct] = useState({});
  const [images, setImages] = useState(null);
  const [similarProducts, setSimilarProducts] = useState([]);
  const token = localStorage.getItem('userToken');
  const storedProductId = localStorage.getItem('productId');

  const [categoryId, setCategoryId] = useState(() => {
    const storedProductId = localStorage.getItem('categoryId');
    return storedProductId ? parseInt(storedProductId) : 0;
  });

  const navigate = useNavigate();

  useEffect(() => {
    fetchProduct();
    fetchSimilarProducts();
    window.scrollTo(0, 0);
    const queryString = qs.stringify({
      storedProductId,
    });
    navigate(`?${queryString}`);
  }, [storedProductId]);
  const fetchProduct = async () => {
    try {
      const { data } = await axios.get(`http://217.76.63.20:44389/api/Product/${storedProductId}`);
      setProduct(data);
      setImages(data.productImages);
    } catch (error) {
      alert('Datada Sehv');
    }
  };
  const fetchSimilarProducts = async () => {
    try {
      const { data } = await axios.get(
        `http://217.76.63.20:44389/api/product?page=1&limit=8&categoryId=${categoryId}`,
      );
      setSimilarProducts(data.product);
    } catch (error) {
      alert('Product data sehv+');
    }
  };
  const AddToFavorite = async (item) => {
    try {
      if (wishlist.find((pr) => Number(pr.id) === Number(item.id))) {
        await axios.delete(`http://217.76.63.20:44389/api/wishlist/delete/${item.id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      } else {
        const { data } = await axios.post(
          `http://217.76.63.20:44389/api/wishlist/add?id=${item.id}`,
          null,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
      }
    } catch (error) {
      alert(error);
    }
  };
  const AddToBasket = async (product) => {
    try {
      await axios.post(`http://217.76.63.20:44389/api/basket/add?id=${product.id}`, null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="detail_wrapper">
      <div className="container">
        <div className="row">
          <PageMap title={'Detail'} />
          <div className="detail_content">
            <div className="pr_image_block d-flex ">
              <div className="pr_images d-flex">
                {images &&
                  images.map((img, index) => {
                    return (
                      <img style={{ width: '100px' }} key={index} src={img.image} alt="Image" />
                    );
                  })}
              </div>
              <div className="main_image">
                <img src={product.image} alt="" />
              </div>
            </div>
            <div className="product_info_block">
              <div className="pr_info">
                <h5>{product.title}</h5>
                <p>{product.price}$</p>
              </div>
              <form action="">
                <div className="select_size">{SizeSelect()}</div>
                <div className="cart_and_wishlist">
                  <div
                    className="cart"
                    onClick={(event) => {
                      event.preventDefault();
                      AddToBasket(product);
                    }}>
                    <ButtonSubmit title={'ADD TO CART'} />
                  </div>
                  <div className="wishlist">
                    <button>
                      <img width={15} height={14} src={heart} alt="Heart" /> WISHLIST
                    </button>
                  </div>
                </div>
              </form>
              <div className="pr_detail_info">
                <h5>Details</h5>
                <p>
                  Состав: 50% Шерсть,
                  <br /> 50% Полиэстер Подкладка: 100% <br />
                  Полиэстер Утеплитель: 90% Пух,
                  <br /> 10% Перо - Не стирать - Гладить при температуре утюга до 110°C
                  <br /> - Не отбеливать - Сухая чистка (химчистка) - Барабанная сушка запрещена{' '}
                  <br />
                  Состав: 50% Шерсть,
                  <br /> 50% Полиэстер Подкладка: 100% <br />
                  Полиэстер Утеплитель: 90% Пух,
                  <br /> 10% Перо - Не стирать - Гладить при температуре утюга до 110°C
                  <br /> - Не отбеливать - Сухая чистка (химчистка) - Барабанная сушка запрещена
                </p>
              </div>
            </div>
          </div>

          <div className="similar_text">
            <h5>Similar Products</h5>
          </div>
          <div className="similar_products">
            {similarProducts &&
              similarProducts.map((item) => (
                <ShopItem key={item.id} {...item} onFavorite={(item) => AddToFavorite(item)} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
