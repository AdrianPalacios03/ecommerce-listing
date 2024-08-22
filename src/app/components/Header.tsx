import { FC } from 'react';
import CartSummary from './CartSummary';

const Header: FC = () => {
  return (
    <header className="bg-blue-500 text-white py-4 px-8 flex justify-between items-center fixed w-full md:w-1/2">
      <h1 className="text-2xl font-bold hidden md:block">E-commerce</h1>
      <CartSummary />
    </header>
  );
};

export default Header;
