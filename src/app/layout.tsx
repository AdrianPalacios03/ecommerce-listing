import { Inter } from 'next/font/google';
import { Providers } from './providers';
import './globals.css'

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'E-commerce Product Listing',
  description: 'A simple e-commerce product listing page built with Next.js and Tailwind CSS',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
