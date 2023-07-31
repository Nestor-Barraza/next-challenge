import React, { useState, ChangeEvent } from 'react';

// SearchBar component
const SearchBar: React.FC<{ onSearchChange: (searchTerm: string) => void }> = ({
    onSearchChange,
  }) => {
    const [searchTerm, setSearchTerm] = useState('');
  
    const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
      const term = event.target.value;
      setSearchTerm(term);
      onSearchChange(term); 
    };
  
    return (
      <div className="flex justify-center mt-4">
        <div className="relative flex">
          <input
            type="text"
            placeholder="Search by title"
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-80 mt-2 p-3 pr-10 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
    );
  };

  export default SearchBar