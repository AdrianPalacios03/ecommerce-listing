import { FC } from 'react';
import StarRating from './StarRating';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartSlice';
import { Product } from '../types';
import { productToCartItem } from '../util/productToCartItem';
import Link from 'next/link';

interface ProductCardProps {
  product: Product;
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const dispatch = useDispatch();
  
  return (
    <div className="border rounded-md p-4">
      <Link href={`/products/${product.id}`} passHref>
        <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
        <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
        <p className="text-gray-600">{product.description.length > 100 ? product.description.slice(0,100) + '...' : product.description}</p>
        <div className="flex justify-between items-center mt-4">
          <div>
            <p className="text-xl font-bold">
              {product.currency} {product.price}
            </p>
            <StarRating rating={product.rating} />
          </div>
        </div>
      </Link>
      <button
        className="bg-blue-500 text-white py-1 px-3 rounded w-full mt-5"
        onClick={() => dispatch(addItem(productToCartItem(product)))}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
