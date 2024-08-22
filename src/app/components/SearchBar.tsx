import { FC } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({ onSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search products..."
      onChange={(e) => onSearch(e.target.value)}
      className="w-full p-2 border rounded-md mb-4 bg-green-100 color-green-800 mt-20"
    />
  );
};

export default SearchBar;
