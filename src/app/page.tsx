import { fetchProducts } from './api/products';
import HomePageContent from './components/HomePageContent';
import { Product } from './types';

const HomePage = async () => {
  try {
    const products = await fetchProducts();
    return <HomePageContent initialProducts={products} />;
  } catch (error) {
    console.error('Error fetching products:', error);
    return <div>Error loading products</div>;
  }
};

export default HomePage;
