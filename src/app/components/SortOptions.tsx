// components/SortOptions.tsx
import React from 'react';

interface SortOptionsProps {
  onSortChange: (sortType: string, ascending: boolean) => void;
}

const SortOptions: React.FC<SortOptionsProps> = ({ onSortChange }) => {
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const [sortType, order] = e.target.value.split('-');
    onSortChange(sortType, order === 'asc');
  };

  return (
    <div className="mb-4">
      <select onChange={handleSortChange} className="border px-4 py-2 rounded">
        <option value="no-sort">Delete filters</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="rating-asc">Rating: Low to High</option>
        <option value="rating-desc">Rating: High to Low</option>
      </select>
    </div>
  );
};

export default SortOptions;
