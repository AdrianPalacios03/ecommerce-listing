"use client"
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const CartSummary: FC = () => {
  const cart = useSelector((state: RootState) => state.cart);
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);

  return (
    <div className="flex items-center">
      <p className="mr-4">Items: {totalItems}</p>
      <p>Total: ${totalPrice}</p>
    </div>
  );
};

export default CartSummary;
