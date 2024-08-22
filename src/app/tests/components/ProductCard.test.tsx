import {describe, expect, test} from '@jest/globals';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import ProductCard from '../../components/ProductCard';

const mockProduct = {
  id: 1,
  title: 'Test Product',
  description: 'This is a test product',
  price: 50.99,
  currency: 'USD',
  image: 'https://via.placeholder.com/150',
  rating: 4.5,
};

describe('ProductCard', () => {
  test('renders product details', () => {
    render(
      <Provider store={store}>
        <ProductCard product={mockProduct} />
      </Provider>
    );

    expect(screen.getByText('Test Product')).toBe(true);
    expect(screen.getByText('This is a test product')).toBe(true);
    expect(screen.getByText('USD 50.99')).toBe(true);
  });

  test('add to cart button works', () => {
    render(
      <Provider store={store}>
        <ProductCard product={mockProduct} />
      </Provider>
    );

    const addButton = screen.getByText(/Add to Cart/i);
    fireEvent.click(addButton);

    expect(store.getState().cart.length).toBe(1);
    expect(store.getState().cart[0].title).toBe('Test Product');
  });
});
