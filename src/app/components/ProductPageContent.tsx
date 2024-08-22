"use client";
import { FC } from "react";
import { Product } from "../types";
import Head from "next/head";
import StarRating from "./StarRating";
import Header from "./Header";
import { useDispatch } from "react-redux";
import { addItem } from '../redux/cartSlice';
import { productToCartItem } from '../util/productToCartItem';

const ProductPageContent: FC<{ product: Product }> = ({ product }) => {

  const dispatch = useDispatch();

  return (
    <>
      <Head>
        <title>{product.title} - E-commerce</title>
        <meta name="description" content={product.description} />
        <meta property="og:title" content={product.title} />
        <meta property="og:description" content={product.description} />
        <meta property="og:image" content={product.image} />
        <meta property="og:url" content={`https://yourdomain.com/products/${product.id}`} />
      </Head>
      <Header/>
      <div className="container mx-auto p-4">
        <div className="flex flex-col md:flex-row mt-20">
          <img src={product.image} alt={product.title} className="w-full md:w-1/2 h-64 object-cover mb-4 md:mb-0 md:mr-4" />
          <div className="md:w-1/2">
            <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
            <p className="text-lg mb-4">{product.description}</p>
            <p className="text-xl font-bold mb-4">{product.currency} {product.price.toFixed(2)}</p>
            <StarRating rating={product.rating} />
            <button
              className="bg-blue-500 text-white py-1 px-3 rounded w-full mt-5"
              onClick={() => dispatch(addItem(productToCartItem(product)))}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductPageContent;