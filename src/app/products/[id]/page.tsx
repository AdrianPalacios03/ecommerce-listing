import { fetchProductById } from '@/app/api/products';
import ProductPageContent from '@/app/components/ProductPageContent';
import { notFound } from 'next/navigation';

interface PageProps {
  params: {
    id: string;
  };
}

async function fetchProductData(id: string) {
  return fetchProductById(parseInt(id))
}

export default async function Page({ params }: PageProps) {
  const { id } = params;

  const product = await fetchProductData(id);

  if (!product) {
    notFound();
  }

  return (
    <ProductPageContent product={product} />
  );
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  try {
    const product = await fetchProductById(parseInt(params.id, 10));
    return {
      title: `${product.title} - E-commerce`,
      description: product.description,
      openGraph: {
        title: product.title,
        description: product.description,
        images: [product.image],
        url: `https://yourdomain.com/products/${product.id}`,
      },
    };
  } catch (error) {
    console.error('Error fetching product for metadata:', error);
    return {
      title: 'Product Not Found',
      description: 'The product you are looking for does not exist.',
    };
  }
}
