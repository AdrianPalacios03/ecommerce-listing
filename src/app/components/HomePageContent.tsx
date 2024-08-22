"use client";

import { useState } from 'react';
import ProductCard from './ProductCard';
import Pagination from './Pagination';
import SearchBar from './SearchBar';
import SortOptions from './SortOptions';
import { Product } from '../types';
import Header from './Header';
import { sortProductsByPrice, sortProductsByRating } from '../util/sortProducts';

interface HomePageContentProps {
  initialProducts: Product[];
}

const HomePageContent = ({ initialProducts }: HomePageContentProps) => {
  const products = initialProducts;
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [currentPage, setCurrentPage] = useState(1);

  const handleSearch = (query: string) => {
    setFilteredProducts(
      products.filter(product =>
        product.title.toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  const handleSortChange = (sortType: string, ascending: boolean) => {
    let sortedProducts = [...filteredProducts];
    if (sortType === 'price') {
      sortedProducts = sortProductsByPrice(sortedProducts, ascending);
    } else if (sortType === 'rating') {
      sortedProducts = sortProductsByRating(sortedProducts, ascending);
    } else {
      sortedProducts = initialProducts
    }
    setFilteredProducts(sortedProducts);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const productsPerPage = 10;
  const displayedProducts = filteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  return (
    <div className="container mx-auto px-4">
      <Header />
      <SearchBar onSearch={handleSearch} />
      <SortOptions onSortChange={handleSortChange} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {displayedProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Pagination
        totalItems={filteredProducts.length}
        itemsPerPage={productsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default HomePageContent;
