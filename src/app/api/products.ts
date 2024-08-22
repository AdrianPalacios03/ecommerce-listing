import productsMock from '../data/productsMock.json';
import { Product } from '../types';

const USE_LOCAL_DATA = false; // set this to true to use the local data, this will allow pagination

export const fetchProducts = async () => {
  const response = await fetch('https://my-json-server.typicode.com/adrianpalacios03/ecommerce-data/products');
  const data = USE_LOCAL_DATA ? productsMock : await response.json();
  console.log(data);
  return data.map((item: Product) => ({
    id: item.id,
    title: item.title,
    description: item.description,
    price: item.price,
    currency: item.currency,
    image: item.image,
    rating: item.rating,
  }));
};
  
export const fetchProductById = async (id: number) => {
  const response = await fetch(`https://my-json-server.typicode.com/adrianpalacios03/ecommerce-data/products/${id}`);
  const data = USE_LOCAL_DATA ? productsMock.find((item: Product) => item.id === id) : await response.json();
    
  if (!data) {
    throw new Error(`Product with ID ${id} not found`);
  }
  
  return {
    id: data.id,
    title: data.title,
    description: data.description,
    price: data.price,
    currency: data.currency,
    image: data.image,
    rating: data.rating,
  };
};