import { Product } from '../types';

export const sortProductsByPrice = (products: Product[], ascending: boolean = true): Product[] => {
  return products.sort((a, b) => ascending ? a.price - b.price : b.price - a.price);
};

export const sortProductsByRating = (products: Product[], ascending: boolean = true): Product[] => {
  return products.sort((a, b) => ascending ? a.rating - b.rating : b.rating - a.rating);
};
