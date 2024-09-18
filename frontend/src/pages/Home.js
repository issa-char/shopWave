import React from 'react'
import ProductList from '../components/ProductList';
import axios from 'axios';
import {useEffect, useState} from 'react'

const Home = () => {
  const [products, setProducts] =useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get('api/products'); // adjst api endpoint as needed
      setProducts(response.data);
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <h1> Welcome TO our Store </h1>
      <ProductList products={products} />
    </div>
  );
};

export default Home;
