// src/components/ProductListing.js
import './ProductListing.css';
import React from 'react';
import products from '../data/products';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../features/cartSlice';
import Slider from 'react-slick';  // Import react-slick

const ProductListing = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const productSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 items at a time
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const dealSettings = {
    ...productSettings,
    slidesToShow: 4, // Show 4 items in "Deals of the Day"
  };

  return (
    <div className="product-list">
      {/* Product Carousel */}
      <h2 className="deals-heading">Our Products</h2>
      <Slider {...productSettings}>
        {products.map(plant => (
          <div key={plant.id} className="plant-item">
             <img src={plant.image} alt={plant.name} />
            <h3>{plant.name}</h3>
            <p>${plant.price}</p>
            <button
              disabled={cartItems.find(item => item.id === plant.id)}
              onClick={() => dispatch(addToCart(plant))}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </Slider>

      {/* Deals of the Day Section */}
      <h2 className="deals-heading">Deals of the Day</h2>
      <Slider {...dealSettings}>
        {products.map(plant => (
          <div key={plant.id} className="plant-item">
            <img src={plant.image} alt={plant.name} />
            <h3>{plant.name}</h3>
            <p>${plant.price}</p>
            <button
              disabled={cartItems.find(item => item.id === plant.id)}
              onClick={() => dispatch(addToCart(plant))}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductListing;
